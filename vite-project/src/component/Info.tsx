import Navbar from "./Navbar";
interface Info{
    Paragraph:string;
}


function Info() {
    return(
        <div>

<a className="bg-yellow-600	" href="/info">Go to info</a>
<div className="bg-amber-200	">
<p className="font-semibold text-lg">لقاء</p>
<p className="font-semibold text-lg">الرياض</p>
<p className="font-semibold text-lg">اسبوعان</p>
<p className="font-semibold text-lg">متاح</p>
</div>

    
     

        </div> 
    )
}
export default Info;