import os
import re

replacements = {
    r'bg-\[\#070709\]': 'bg-white dark:bg-[#0B1020]',
    r'bg-\[\#050505\]': 'bg-zinc-50 dark:bg-[#0B1020]',
    r'bg-\[\#0e0e13\]': 'bg-white dark:bg-[#0e0e13]',
    r'bg-zinc-800/80': 'bg-zinc-100 dark:bg-zinc-800/80',
    r'bg-zinc-900/50': 'bg-zinc-100/50 dark:bg-zinc-900/50',
    r'text-zinc-100': 'text-zinc-900 dark:text-zinc-100',
    r'text-zinc-200': 'text-zinc-800 dark:text-zinc-200',
    r'text-zinc-300': 'text-zinc-700 dark:text-zinc-300',
    r'text-zinc-400': 'text-zinc-600 dark:text-zinc-400',
    r'text-zinc-500': 'text-zinc-500 dark:text-zinc-500',
    r'border-white/5': 'border-zinc-200 dark:border-white/5',
    r'border-white/10': 'border-zinc-200 dark:border-white/10',
    r'border-white/15': 'border-zinc-300 dark:border-white/15',
    r'bg-white/5': 'bg-black/5 dark:bg-white/5',
    r'bg-white/10': 'bg-black/10 dark:bg-white/10',
    r'from-indigo-500': 'from-[#4F8CFF]',
    r'to-purple-500': 'to-[#7C4DFF]',
    r'from-indigo-400': 'from-[#4F8CFF]',
    r'to-purple-400': 'to-[#7C4DFF]',
    r'text-indigo-400': 'text-[#4F8CFF]',
    r'text-purple-400': 'text-[#7C4DFF]',
    r'bg-indigo-500/20': 'bg-[#4F8CFF]/20',
    r'bg-purple-500/20': 'bg-[#7C4DFF]/20',
    r'border-indigo-500/30': 'border-[#4F8CFF]/30',
    r'border-purple-500/30': 'border-[#7C4DFF]/30',
    r'ring-indigo-500/50': 'ring-[#4F8CFF]/50',
    r'text-white': 'text-[#0B1020] dark:text-white',
    # Avoid replacing in specific spots if possible, but for a global theme this is ok
}

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    new_content = content
    for old, new in replacements.items():
        new_content = re.sub(old, new, new_content)
        
    if content != new_content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            # Skip GradifyLogo as we already modified it and it has specific gradients
            if 'GradifyLogo' in file: continue
            process_file(os.path.join(root, file))
