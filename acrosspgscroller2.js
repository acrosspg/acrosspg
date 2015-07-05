/*
 *	Advanced Recent Posts Scroller Version 3 For Blogger
 *	Url: http://www.acrosspg.com/
 *	Copyright © 2011 
 */
function axpgAdvRecentPostsScroller(json) {
    var axpgrecentposts;
    var axpgpostlink;
    var axpgobj;
    var axpgmarqueehtml;
    var axpgmarqueehtml2;
    var byacrosspg;
    var axpglinkgap;
    var axpgposttargetlink;
    var axpgBullet;
    try {
        axpgmarqueehtml = "\<marquee behavior=\"scroll\" onmouseover=\"this.stop();\" onmouseout=\"this.start();\" ";

        if (axpgScrollAmount) {
            axpgmarqueehtml = axpgmarqueehtml + " scrollamount = \"" + axpgScrollAmount + "%\"";
        }
        if (axpgWidth) {
            axpgmarqueehtml = axpgmarqueehtml + " width = \"" + axpgWidth + "%\"";
        } else {
            axpgmarqueehtml = axpgmarqueehtml + " width = \"100%\"";
        }
        if (axpgScrollDelay) {
            axpgmarqueehtml = axpgmarqueehtml + " scrolldelay = \"" + axpgScrollDelay + "\"";
        }
        if (axpgDirection) {
            axpgmarqueehtml = axpgmarqueehtml + " direction = \"" + axpgDirection + "\"\>";
            if (axpgDirection == "left" || axpgDirection == "right") {
                axpglinkgap = "&nbsp;&nbsp;&nbsp;";
            } else {
                axpglinkgap = "\<br/\>";
            }
        }
        if (axpgtargetlink == "yes") {
            axpgposttargetlink = " target= \"_blank\" ";
        } else {
            axpgposttargetlink = " ";
        }
        if (axpgimagebullet == "yes") {
            axpgBullet = " \<img class=\"axpgbulletbimg\" src=\"" + axpgimgurl + "\" />";
        } else {
            axpgBullet = axpgBulletchar;
        }
        axpgmarqueehtml2 = "\</marquee\>"
        axpgrecentposts = "";
        for (var axpgrp = 0; axpgrp < axpgnumPosts; axpgrp++) {
            var axpgobj = json.feed.entry[axpgrp];
            if (axpgrp == json.feed.entry.length) break;
            for (var axpgcc = 0; axpgcc < axpgobj.link.length; axpgcc++) {
                if (axpgobj.link[axpgcc].rel == 'alternate') {
                    axpgpostlink = axpgobj.link[axpgcc].href;
                    break;
                }
            }
            axpgrecentposts = axpgrecentposts + axpgBullet + " \<a " + axpgposttargetlink + " href=\"" + axpgpostlink + "\">" + axpgobj.title.$t + "\</a\>" + axpglinkgap;
        }
        byacrosspg = "\<a tareget =\"_blank\" href=\"http://www.exams.acrosspg.com\"\>+  Grab this Widget\</a\> on \<a tareget =\"_blank\" href=\"http://www.exams.acrosspg.com/\"\>AcrossPG\</a\>";
        if (axpgDirection == "left") {
            axpgrecentposts = axpgrecentposts + "&nbsp;&nbsp;&nbsp;" + byacrosspg;
        } else if (axpgDirection == "right") {
            axpgrecentposts = byacrosspg + "&nbsp;&nbsp;&nbsp;" + axpgrecentposts;
        } else if (axpgDirection == "up") {
            axpgrecentposts = axpgrecentposts + "\<br/\>" + byacrosspg;
        } else {
            axpgrecentposts = byacrosspg + "\<br/\>" + axpgrecentposts;
        }
        document.write("\<style style=\"text/css\"\>.acrosspg-srp{font-size:" + axpgfontsize + "px;background:#" + axpgbgcolor + ";font-weight:bold;}.acrosspg-srp a{color:#" + axpglinkcolor + ";text-decoration:none;}.acrosspg-srp a:hover{color:#" + axpglinkhovercolor + ";}img.axpgbulletbimg{vertical-align:middle;border:none;}\</style\>")
        document.write("\<div class=\"acrosspg-srp\"\>" + axpgmarqueehtml + axpgrecentposts + axpgmarqueehtml2 + "\</div\>")
    } catch (exception) {
        alert(exception);
    }
}
