import os

a = 1

for fn in os.listdir("."):
	if fn.endswith(".jpg"):
		os.rename(fn, "banner_fundraising"+str(a)+".jpg")
		a+=1