import os, re

with open('index.html', encoding='utf-8') as f:
    html = f.read()

scripts = re.findall(r'<script[^>]+src=[\'"]([^\'"]+)', html)
print('Verifying HTML script sources:')
all_good = True
for s in scripts:
    clean_s = s.split('?')[0]
    if clean_s.startswith('http'):
        print(f'  ✅ [EXTERNAL] {clean_s}')
    else:
        exists = os.path.exists(clean_s)
        if not exists:
            all_good = False
        print(f'  {"✅" if exists else "❌"} [LOCAL] {clean_s} -> Exists: {exists}')

print('\nVerifying ES module imports:')
for root, dirs, files in os.walk('js'):
    for file in files:
        if file.endswith('.js'):
            path = os.path.join(root, file)
            with open(path, encoding='utf-8') as f:
                content = f.read()
            imports = re.findall(r'(?:import|export)\s+.*?\s+from\s+[\'"]([^\'"]+)[\'"]', content)
            for imp in imports:
                resolved = os.path.normpath(os.path.join(root, imp))
                exists = os.path.exists(resolved)
                if not exists:
                    all_good = False
                print(f'  {"✅" if exists else "❌"} [{file}] from "{imp}" -> Exists: {exists}')

if all_good:
    print('\n🎉 ALL SCRIPT SOURCES & ES MODULE IMPORTS RESOLVE 100% CLEANLY!')
else:
    print('\n⚠️ SOME PATHS FAILED TO RESOLVE!')
