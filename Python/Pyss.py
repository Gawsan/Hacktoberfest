
  
import pyscreenshot
  
# im=pyscreenshot.grab(bbox=(q,w,e,r))
image = pyscreenshot.grab(bbox=(10, 10, 500, 500))
  
# Display
image.show()
  
# To save the screenshot
image.save("Abhchaloo.png")
