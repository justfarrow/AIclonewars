var arr = [
  'https://app.promptzilla.ai/dl/d0a5f4/s/3b1bc8/s/5a567a/r/gkfinxj-Squ7AbWnR1JQ1w',
  'https://ailink.icu/#/home/chat',
  'https://www.surveyors.live',
  'https://open-gpt.app/en',
  'https://metaprompt.vercel.app/',
  'https://chat.lmsys.org/',
  'https://zillagpt.vercel.app/',
  'https://freegpt.cc/',
  'https://wen.geekr.dev/',
  'https://gpt.getshare.net/',
  'http://app.prompzilla.ai/',
  'https://promptzilla.vercel.app/zilla/index.html',
  'https://promptzilla.siteoly.com/',
  'https://promptzilla.pyro.app/',
  'https://promptzilla.hn.plus/newest',
  'https://zillaprompts.blogspot.com/',
  'https://jobs.landsurveyorsunited.com/',
  'https://www.promptzilla.ai/']


function change_embed(source){
  document.getElementById("frame").src = source;
  // var clone=emb.cloneNode(true);
  // clone.setAttribute('src',source);
  // emb.parentNode.replaceChild(clone,emb);
}

var current_item = 0;


function update_frame(e){
  
  if(e.target.id=='previous'){
    if(current_item == 0){
      current_item = arr.length-1;
    }
    else {
      current_item -= 1;
    }
    document.getElementById("frame").src = arr[current_item];
  }
  if(e.target.id=='random'){
    max = arr.length-1
    min = 0
    current_item = Math.floor(Math.random() * (+max - +min)) + +min; 
    document.getElementById("frame").src = arr[current_item];
  }
  if(e.target.id=='next'){
    if(current_item >= arr.length-1){
      current_item = 0;
    }
    else {
      current_item += 1;
    }
    document.getElementById("frame").src = arr[current_item];
  }
  
  
  
  
  
  
}

document.getElementById('previous').addEventListener('click', update_frame);
document.getElementById('random').addEventListener('click', update_frame);
document.getElementById('next').addEventListener('click', update_frame);