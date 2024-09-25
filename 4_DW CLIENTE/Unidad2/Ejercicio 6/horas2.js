for(i=9;i<21;i++){
    document.write(i+ ":00 <br/>");
    for(j=5;j<60;j+=5){
        document.write((j == 5) ? i + ":05<br/>" : i+":"+j+"<br/>");
    }
}