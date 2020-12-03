$(document).ready(function() {
    var talks = [];
        //$("#driver").click(function(){
           $.getJSON('talks.json', function(talks) {
            $.each(talks.upcomingTalk, function(i,t) {
              var temp = '<li><a href="'+ t.eventURL + '">' + t.eventName + '</a>';
              //$('#upcoming').append('<li><a href="'+ t.eventURL + '">' + t.eventName + '</a>');
              if (t.deckURL)
                temp += ' | <a class="deck" href="/talks/decks/'+t.deckURL+'">deck</a>';
              
              if (t.videoURL)
                temp += ' | <a class="deck" href="'+t.videoURL+'">video</a>';
              
              if (t.linkURL) {
                temp += '<ul><li>';
              
                for (l in t.linkURL) {
                  if(l==0)
                    temp += '<a class="deck" href="'+t.linkURL[l]+'">article</a>';
                  if(t.linkURL.length && (t.linkURL.length != t.linkURL.length - l)) {
                      temp += ', '
                      temp += '<a class="deck" href="'+t.linkURL[l]+'">article</a> ';
                      //alert("l:"+l+", t.linkURL.len:"+t.linkURL.length+", t.linkURL:"+t.linkURL);
                    }
                }

                temp += '</li></ul>';
                }

              // $('#upcoming').append(' | <a href="'+t.deckURL+'">deck</a></li>');
              // $('#upcoming').append('</li>');
              // $('#upcominfg').append('<li>Date: ' + t.date+ '</li>');
              
              $('#upcoming').append(temp);
              //$(talks).appendTo("#upcoming ul");
           });
            $.each(talks.previousTalk, function(j,t) {
              var temp = '<li><a href="'+ t.eventURL + '">' + t.eventName + '</a>';
              
              if (t.deckURL)
                temp += ' | <a class="deck" href="/talks/decks/'+t.deckURL+'">deck</a>';
              
              if (t.videoURL)
                temp += ' | <a class="deck" href="'+t.videoURL+'">video</a>';
              
              if (t.linkURL) {
                temp += '<ul><li>';
              
                for (l in t.linkURL) {
                  if(l==0)
                    temp += '<a class="deck" href="'+t.linkURL[l]+'">article</a>';
                  if(t.linkURL.length && (t.linkURL.length != t.linkURL.length - l)) {
                      temp += ', '
                      temp += '<a class="deck" href="'+t.linkURL[l]+'">article</a> ';
                      //alert("l:"+l+", t.linkURL.len:"+t.linkURL.length+", t.linkURL:"+t.linkURL);
                    }
                }

                temp += '</li></ul>';
                }

              temp += '</li>';
              //$('#previous').append('<li><a href="'+ t.eventURL + '">' + t.eventName + '</a> | <a href="'+t.deckURL+'">deck</a></li>');
              //$('#previous').append('<li>Date: ' + t.date+ '</li>');
              $('#previous').append(temp);
              //$(talks).appendTo("#previous ul");
           });
            
        });      
     });
function loadBackground() {
  document.body.style.backgroundImage = "url('/talks/img/Lee Calcote - CloudNativeDay.jpg')";
}