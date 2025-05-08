jekyll=bundle exec jekyll

site:
	$(jekyll) serve --drafts --base=/talks --livereload
	open http://localhost:4000/talks

site-no-incremental:
	bundle install; $(jekyll) serve --drafts --livereload --config _config.yml

# With Jekyll Manager interface
site-admin:
	ADMIN=on $(jekyll) serve --drafts --base=/talks

build:
	$(jekyll) build --drafts --base=/talks

setup:
	ADMIN=on bundle install

docker:
	docker run --rm -p 4000:4000 -v `pwd`:"/srv/jekyll" jekyll/jekyll bash -c "bundle install; jekyll serve --drafts --base=/talks"
