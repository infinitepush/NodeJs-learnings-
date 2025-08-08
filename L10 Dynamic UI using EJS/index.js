//10 Dynamic Ui using EJS: Till now what we have seen was static UI but in dynamic UI pages the content are changing.. in this chapter we will learn how to deal with dynamic UI

//10.1 Need of Dynamic UI: For building better applications we need Dynamic UI. Read notes for better understanding and points.

//10.2 Sharing using Global Variables: Let's do one thing whatever homes we will register we will try to show it in the home page. 
// Go to host router page
//summary: we just created an array that will display houseNames and in post function we push the houseNames into that array  and then exported them in different manner so that multiples values can be displayed and then use destructor {} in hostRouter so that it can take multiple values. 
// then we went to userRouter where we made the registered Home variable acccessible there
// but still it will show the same houses to everyone on local host and to solve that problem EJS comes into action..