import os

a = 1

for fn in os.listdir("."):
	if fn.endswith(".JPG"):
		os.rename(fn, "banner_blink"+str(a)+".jpg")
		a+=1