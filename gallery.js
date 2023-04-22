function collOfImg()
{
    var allimgtag=document.images;
    for(i=0;i<allimgtag.length; i++)
    {
        allimgtag[i].src=`${i}.jpg`
    }
    
}
collOfImg()
function bigWindow(imgurl)
{
    document.getElementById("imgContainer").style.backgroundImage=`url(${imgurl})`
}