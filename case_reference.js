const fs = require('fs').promises;
const path = require('path');

const notTarget = [
    'NaN',
    'null',
    'undefined',
    'true',
    'false',
    'Infinity',
    '-Infinity',
    '""',
    "''",
    '``',
]

async function processFiles() {
    const referenceDir = './reference'; // reference 디렉토리 경로
    try {
        await fs.unlink('raw.jsonl');
        await fs.unlink('output.jsonl');
    } catch(e) {}
    
    // 디렉토리의 모든 파일 읽기
    const files = await fs.readdir(referenceDir);
    const list = [];
        
    // .js 파일만 필터링
    const jsFiles = files.filter(file => file.endsWith('.js'));
        
    for (const jsFile of jsFiles) {
        try {
            const baseName = jsFile.replace('.js', '');
            const typesFile = `${baseName}.types`;
            
            // .js와 .types 파일 내용 읽기
            const jsContent = await fs.readFile(path.join(referenceDir, jsFile), 'utf8');
            const typesContent = await fs.readFile(path.join(referenceDir, typesFile), 'utf8');
            if(jsContent.includes('<reference')) continue;
            if(jsContent.includes('import')) continue;
            if(!jsContent) continue;
            
            // 파일 내용 파싱
            const result = parseFiles(jsContent, typesContent);
            if (!result.types.length) continue;
            
            // 또는 파일로 저장
            await fs.appendFile(`raw.jsonl`, JSON.stringify(result) + '\n');
            list.push(result);
        } catch (error) {
            console.error('Error processing files:', error);
        }
    }
    let lc = 0
    for(const item of list) {
        for(const type of item.types) {
            lc += type.type.length;
            continue;
            await fs.appendFile(`output.jsonl`, JSON.stringify({
                code: item.code,
                query: type.code,
                result: type.type,
            }) + '\n');
        }
    }

    console.log(lc);
}

function parseFiles(jsContent, typesContent) {
    // //// 구분자로 분리된 섹션 파싱
    const jsSections = jsContent.split('////');
    
    // TypeScript 코드 섹션 찾기
    const tsCode = jsSections[3].replaceAll('\r', '\n').replaceAll('\n\n', '\n').trim().split('\n').slice(1).join('\n');
    
    // 타입 정보 파싱
    const typeEntries = [];
    const lines = typesContent.split('\n');
    let currentCode = '';
    let currentType = '';
    
    for (const line of lines) {
        if (line.startsWith('>')) {
            if (currentCode && currentType) {
                typeEntries.push({ code: currentCode.trim(), type: currentType.trim() });
            }
            const parts = line.split(':');
            if (parts.length >= 2) {
                currentCode = parts[0].substring(1).trim();
                currentType = parts.slice(1).join(':').trim();
            }
        }
    }
    
    // 마지막 엔트리 추가
    if (currentCode && currentType) {
        typeEntries.push({ code: currentCode.trim(), type: currentType.trim() });
    }

    if(typeEntries.some(({type})=>type==='error')) {
        return {
            code: tsCode,
            types: []
        };
    }
    
    return {
        code: tsCode,
        types: typeEntries.filter(({code, type}) => {
            if(!code || !type) return false;
            if(code.length > 20) return false;
            if(type.length > 20) return false;
            if(notTarget.includes(type)) return false;
            if(code === type) return false;
            if(code.includes('=')) return false;
            if(type.includes('typeof')) return false;
            if(type.includes('import')) return false;
            if(type.includes('unknown')) return false;
            if(type.includes('unique symbol')) return false;
            if(code.includes('"')) return false;
            if(code.includes('`')) return false;
            if(code.includes('\'')) return false;
            return true;
        })
    };
}

// 함수 실행
processFiles();