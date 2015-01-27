.PHONY : all test jshint run

JSHINT := node_modules/.bin/jshint

all : test

test : jshint

jshint :
	$(JSHINT) app.js env.js routes views

run :
	npm start
