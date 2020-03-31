if grep -o -E '(chg|add|fix): .*' "$1"; then
    exit 0
else
    echo "commit message template is not matched!"
    exit 1
fi
