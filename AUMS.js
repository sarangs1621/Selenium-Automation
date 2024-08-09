function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }

async function namahshivaya(){
	button=document.getElementById("form-branch::submitEvaluation");
    
	document.getElementById(`form-branch::categorySection::itemrow::renderedItem::nextrow:1:verticalDisplay::scaleOption:0:radioValue`).checked=true;

for(let j=1;j<=20;j++){
	if(document.getElementById(`form-branch::categorySection::itemrow:${j}:renderedItem::nextrow:${j+1}:verticalDisplay::scaleOption:0:radioValue`)===null)
	{
		continue;
	}
	else{
		document.getElementById(`form-branch::categorySection::itemrow:${j}:renderedItem::nextrow:${j+1}:verticalDisplay::scaleOption:0:radioValue`).checked=true;
		}
}

for(let j=1;j<=20;j++){
	if(document.getElementById(`form-branch::categorySection::itemrow:${j}:renderedItem::nextrow:${j+1}:verticalDisplay::scaleOptions:0:choiceValue`)===null){
	continue;
	}
	else{
		document.getElementById(`form-branch::categorySection::itemrow:${j}:renderedItem::nextrow:${j+1}:verticalDisplay::scaleOptions:0:choiceValue`).checked=true;
	     }
}
    
    await sleep(2000);
    button.click();
}

namahshivaya();