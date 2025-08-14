import json

manifest = json.load(open("manifest.json"))

sites = []
with open("blocklist.txt") as f:
	for line in f:
		line = line.strip()
		pattern = ("" if "://" in line else "https://") \
			+ line + ("*" if line[-1] == '/' else "/*")
		sites.append(pattern)

manifest["content_scripts"][0]["matches"] = sites
json.dump(manifest, open("manifest.json", 'w'), indent="\t", sort_keys=False)