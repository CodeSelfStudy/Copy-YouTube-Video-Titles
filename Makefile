.PHONY: clean, cloc, build

help:
	@echo "Please use \`make <target>' where <target> is one of"
	@echo "  clean - remove all build, test, coverage and Python artifacts"
	@echo "  build - build the extension, deleting the old build"
	@echo "  cloc  - count lines of code. You need to 'npm i -g cloc' first"

clean:
	find . -name '*.pyc' -exec rm -f {} +
	find . -name '*.pyo' -exec rm -f {} +
	find . -name '*~' -exec rm -f {} +
	find . -name '__pycache__' -exec rm -rf {} +

build:
	./scripts/build.sh

cloc:
	cloc --exclude-dir=_build,.sass-cache,node_modules,__pycache__,static .
