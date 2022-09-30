function a() {
    var b = 10; 
    // console.log(b);   print 10
    c();
    function c() {
        console.log(b);
    }
}

a(); 