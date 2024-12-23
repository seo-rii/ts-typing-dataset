//// [tests/cases/conformance/expressions/typeGuards/typeGuardOfFormThisMemberErrors.ts] ////

//// [typeGuardOfFormThisMemberErrors.ts]
// There's a 'File' class in the stdlib, wrap with a namespace to avoid collision
namespace Test {
	export class FileSystemObject {
		isFSO: this is FileSystemObject;
		get isFile(): this is File {
			return this instanceof File;
		}
		set isFile(param) {
			// noop
		}
		get isDirectory(): this is Directory {
			return this instanceof Directory;
		}
		isNetworked: this is (Networked & this);
		constructor(public path: string) {}
	}

	export class File extends FileSystemObject {
		constructor(path: string, public content: string) { super(path); }
	}
	export class Directory extends FileSystemObject {
		children: FileSystemObject[];
	}
	export interface Networked {
		host: string;
	}

	let file: FileSystemObject = new File("foo/bar.txt", "foo");
	file.isNetworked = file.isFile;
	file.isFSO = file.isNetworked;
	file.isFile = file.isFSO;
}

//// [typeGuardOfFormThisMemberErrors.js]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// There's a 'File' class in the stdlib, wrap with a namespace to avoid collision
var Test;
(function (Test) {
    var FileSystemObject = /** @class */ (function () {
        function FileSystemObject(path) {
            this.path = path;
        }
        Object.defineProperty(FileSystemObject.prototype, "isFile", {
            get: function () {
                return this instanceof File;
            },
            set: function (param) {
                // noop
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FileSystemObject.prototype, "isDirectory", {
            get: function () {
                return this instanceof Directory;
            },
            enumerable: false,
            configurable: true
        });
        return FileSystemObject;
    }());
    Test.FileSystemObject = FileSystemObject;
    var File = /** @class */ (function (_super) {
        __extends(File, _super);
        function File(path, content) {
            var _this = _super.call(this, path) || this;
            _this.content = content;
            return _this;
        }
        return File;
    }(FileSystemObject));
    Test.File = File;
    var Directory = /** @class */ (function (_super) {
        __extends(Directory, _super);
        function Directory() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Directory;
    }(FileSystemObject));
    Test.Directory = Directory;
    var file = new File("foo/bar.txt", "foo");
    file.isNetworked = file.isFile;
    file.isFSO = file.isNetworked;
    file.isFile = file.isFSO;
})(Test || (Test = {}));


//// [typeGuardOfFormThisMemberErrors.d.ts]
declare namespace Test {
    class FileSystemObject {
        path: string;
        isFSO: this is FileSystemObject;
        get isFile(): this is File;
        set isFile(param: this is File);
        get isDirectory(): this is Directory;
        isNetworked: this is (Networked & this);
        constructor(path: string);
    }
    class File extends FileSystemObject {
        content: string;
        constructor(path: string, content: string);
    }
    class Directory extends FileSystemObject {
        children: FileSystemObject[];
    }
    interface Networked {
        host: string;
    }
}
