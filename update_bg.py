import os
import re

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace bg-white with bg-background for main structural elements
    # specifically targeting patterns like: className="... bg-white dark:bg-spec-black ..."
    # and ensuring we don't accidentally replace cards which might be just "bg-white dark:bg-spec-dark"
    new_content = content.replace("bg-white dark:bg-spec-black", "bg-background dark:bg-spec-black")
    
    # Also for Header: bg-white/95 to bg-background/95
    if "Header.tsx" in filepath:
        new_content = new_content.replace("bg-white/95 dark:bg-spec-black/95", "bg-background/95 dark:bg-spec-black/95")

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

def main():
    src_dir = "src"
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith(".tsx") or file.endswith(".ts"):
                replace_in_file(os.path.join(root, file))

if __name__ == "__main__":
    main()
