## Troubleshooting

### Line-break errors in eslint

If there are line-break errors in eslint, it may be because false line endings set by git. Try to check out the repo again.
To prevent this check the git config "core.autocrlf".

### gulp serve malloc error (Unix Only)

************** gulp(975,0x104c15000) malloc: *** error for object 0x10164201c: pointer being freed was not allocated *** set a breakpoint in malloc_error_break to debug **************

This is caused by missing sass files. Be sure you've done a bower install before `npm start`.
