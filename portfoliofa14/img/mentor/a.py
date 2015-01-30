import os

a = 1

for fn in os.listdir("."):
	if fn.endswith(".JPG"):
		os.rename(fn, "banner_mentor"+str(a)+".jpg")
		a+=1