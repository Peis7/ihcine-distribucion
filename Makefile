
.DEFAULT_GOAL := tailwind-dev

# Tailwind Development
tailwind-dev:
	@npx @tailwindcss/cli@next -i src/styles/global.css -o ./src/styles/ihcine.css --config tailwind.config.js --watch

tailwind-prod:
	@npx @tailwindcss/cli@next -i src/styles/global.css -o dist/styles/ihcine.css --minify