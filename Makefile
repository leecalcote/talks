jekyll=bundle exec jekyll

site:
	$(jekyll) serve --drafts --base=/talks --livereload

# With Jekyll Manager interface
site-admin:
	ADMIN=on $(jekyll) serve --drafts --base=/talks

build:
	$(jekyll) build --drafts --base=/talks

setup:
	ADMIN=on bundle install

docker:
	docker run --rm -p 4000:4000 -v `pwd`:"/srv/jekyll" jekyll/jekyll bash -c "bundle install; jekyll serve --drafts --base=/talks"
