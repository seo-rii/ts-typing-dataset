//// [tests/cases/conformance/scanner/ecmascript5/scannerStringLiterals.ts] ////

//// [scannerStringLiterals.ts]
""
" "
"a"
"'"
'"'
"\""
'\u2192\   '
"Legal line continuation \
"
"Should error because of newline.
"Should error because of end of file.

//// [scannerStringLiterals.js]
"";
" ";
"a";
"'";
'"';
"\"";
'\u2192\   ';
"Legal line continuation \
";
"Should error because of newline.;
"Should error because of end of file.;
