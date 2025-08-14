import json

manifest = json.load(open("manifest.json"))

sites = []
with open("blocklist.txt") as f:
	for line in f:
		line = line.strip()

		pattern = ("" if "://" in line else "https://") \
			+ line + ("*" if line[-1] == '/' else "/*")

		tokens = pattern.split("://")
		pattern2 = tokens[0] + "://" + \
		(tokens[1].replace('www.', '') if "://www." in pattern \
   			else "www." + tokens[1])

		sites.append(pattern)
		sites.append(pattern2)

manifest["content_scripts"][0]["matches"] = sites
json.dump(manifest, open("manifest.json", 'w'), indent="\t", sort_keys=False)
