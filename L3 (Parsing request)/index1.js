// 3: Parsing Requests
//3.1:: Streams:  data server me ek stream-line flow me pass hota hai..jaise agar 6gb ki file uploa/download karni hoti hai toh woh ek streamline me kb me flow karti hai
// Duplex stream = jab server ko data dena bhi hota hai aur server se receive bhi karna hota hai jaise phone calls... single stream ka example ho skta hai walkie-talkie
// Socket = Jab server se connect krna hai data ko 

//3.2:: Chunks : The smallest part of data stream jo ek baar me travel hota hai usko chunk bolte hai..jaise kilo bytes. for ex = jaise yt pe video chalti hai pakcets of chunks download hookar play hota hai aur wo process bhi hone lagta hai, another ex would be koi file jab download karte hai toh uska ek folder ban jata hai aur woh bhi dheere dheere show hota hai ki hamari files download ho rhi hai 

//3.3 Buffers: Buffer matlab chunks ko ek sahi order me arrange karna jisse ek meaningful task ho usko kehte hai buffer
