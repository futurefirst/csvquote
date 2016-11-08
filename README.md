csvquote
========

Parses CSV input and quotes all string fields.

CSV data is read from stdin, parsed, rebuilt into CSV with all string fields
quoted (but not blank fields), and output to stdout.

Install it like:
`npm install -g csvquote`

Use it like:
`csvquote < input.csv > output.csv`
