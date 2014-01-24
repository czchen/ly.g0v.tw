angular.module('app.templates', [])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('app/partials/about.jade', [
'<div class="about"><h1 class="ui header">This is pre-alpha!</h1><h2 class="ui header">Source code<div class="sub header"><a href="https://github.com/g0v/ly.g0v.tw">Source code </a>is available on github.com and under<a href="http://g0v.mit-license.org/"> MIT License</a></div></h2><h2 class="ui header">Icon attributions</h2><div class="ui bulleted list attribution"><div class="item"><a href="http://thenounproject.com/noun/judge/#icon-No3953" target="_blank">Judge</a>designed by <a href="http://thenounproject.com/Luis" target="_blank">Luis Prado</a>from The Noun Project</div><div class="item"><a href="http://thenounproject.com/noun/antenna/#icon-No10279" target="_blank">Antenna</a>designed by <a href="http://thenounproject.com/rocavence" target="_blank">Roca Chang</a>from The Noun Project</div><div class="item"><a href="http://thenounproject.com/noun/earth/#icon-No4570" target="_blank">Earth</a>designed by <a href="http://thenounproject.com/thibault.geffroy" target="_blank">Thibault Geffroy</a>from The Noun Project</div><div class="item"><a href="http://thenounproject.com/noun/institution/#icon-No1564" target="_blank">Institution</a>designed by <a href="http://thenounproject.com/thibault.geffroy" target="_blank">Thibault Geffroy</a>from The Noun Project</div></div><h2 class="ui header">Icons by Alice, ETBlue and WalkingIce</h2><div class="ui horizontal list g0v-icon-list"><div class="item"><i class="g0v-icon KMT large"></i><div class="desc">國民黨黨徽  <div class="note">( i.g0v.icon.KMT )</div></div></div><div class="item"><i class="g0v-icon DPP large"></i><div class="desc">民進黨黨徽  <div class="note">( i.g0v-icon.DPP )</div></div></div><div class="item"><i class="g0v-icon PFP large"></i><div class="desc">親民黨黨徽  <div class="note">( i.g0v-icon.PFP )</div></div></div><div class="item"><i class="g0v-icon TSU large"></i><div class="desc">台灣團結聯盟黨徽  <div class="note">( i.g0v-icon.TSU )</div></div></div><div class="item"><i class="g0v-icon NSU large"></i><div class="desc">無黨籍聯盟黨徽  <div class="note">( i.g0v-icon.NSU )</div></div></div><div class="item"><i class="g0v-icon NON large"></i><div class="desc">無黨籍  <div class="note">( i.g0v-icon.NON )</div></div></div><div class="item"><i class="g0v-icon CON large"></i><div class="desc">修憲委員會  <div class="note">( i.g0v-icon.CON )</div></div></div><div class="item"><i class="g0v-icon DIS large"></i><div class="desc">紀律委員會  <div class="note">( i.g0v-icon.DIS )</div></div></div><div class="item"><i class="g0v-icon FIN large"></i><div class="desc">財政委員會  <div class="note">( i.g0v-icon.FIN )</div></div></div><div class="item"><i class="g0v-icon EDU large"></i><div class="desc">教育及文化委員會  <div class="note">( i.g0v-icon.EDU )</div></div></div><div class="item"><i class="g0v-icon ECO large"></i><div class="desc">經濟委員會  <div class="note">( i.g0v-icon.ECO )</div></div></div><div class="item"><i class="g0v-icon FND large"></i><div class="desc">外交與國防委員會  <div class="note">( i.g0v-icon.FND )</div></div></div><div class="item"><i class="g0v-icon IAD large"></i><div class="desc">內政委員會  <div class="note">( i.g0v-icon.IAD )</div></div></div><div class="item"><i class="g0v-icon JUD large"></i><div class="desc">司法與法制委員會  <div class="note">( i.g0v-icon.JUD )</div></div></div><div class="item"><i class="g0v-icon PRO large"></i><div class="desc">程序委員會  <div class="note">( i.g0v-icon.PRO )</div></div></div><div class="item"><i class="g0v-icon SWE large"></i><div class="desc">社會福利及衛生環境委員會  <div class="note">( i.g0v-icon.SWE )</div></div></div><div class="item"><i class="g0v-icon TRA large"></i><div class="desc">交通委員會  <div class="note">( i.g0v-icon.TRA )</div></div></div><div class="item"><i class="g0v-icon YS large"></i><div class="desc">院會  <div class="note">( i.g0v-icon.YS )</div></div></div></div></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('app/partials/bills.jade', [
'<div ng-if="toCompare" class="bill compare"><div class="ui two column stackable grid"><div class="column"><div class="bill-meta"><div class="links ui tiered menu"><div class="menu number"><a ng-href="/bills/{{bill_ref}}" ng-show="bill_ref" class="item">提案編號 {{ bill_ref }}<i class="icon forward mail"></i></a></div><div class="menu role"><div ng-repeat="e in sponsors" legislator="e" class="item simplified"></div><div ng-repeat="e in cosponsors" legislator="e" class="item simplified"></div></div></div></div><h1 title="{{summary}}" class="ui header bill">{{summary}}</h1><div class="summary"><p class="description">{{abstract}}</p></div></div><div ng-repeat="(ref, bill) in toCompare" class="column"><div class="bill-meta"><div class="links ui tiered menu"><div class="menu"><a ng-href="/bills/{{ref}}" ng-show="bill_ref" class="item">提案編號 {{ ref }}<i class="icon forward mail"></i></a></div><div class="menu role"><div ng-repeat="e in bill.sponsors" legislator="e" class="item simplified"></div><div ng-repeat="e in cosponsors" legislator="e" class="item simplified"></div></div></div></div><h1 title="{{bill.summary}}" class="ui header bill">{{bill.summary}}</h1><div class="summary"><p class="description">{{bill.abstract}}</p></div></div></div><div ng-repeat="(name, statues) in diffMatrix" scroll-spy class="content default"><a name="{{name}}" spy-target></a><h2 class="ui horizontal divider">{{name}}</h2><div ng-repeat="(statue, versions) in statues" spy-target class="ui two column grid"><div class="row"><div ng-repeat="version in bill_refs" class="column"><div class="ui segment"><a id="{{version}}-{{statue}}" ng-href="#xx-{{statue}}" style="margin-top: -90px; padding-top: 90px"><div class="ui ribbon label">{{statue}}</div></a>{{versions[version].content}}</div></div></div><div class="row"><div ng-repeat="version in bill_refs" class="column"><div ng-bind="versions[version].comment" ng-show="versions[version].comment" class="ui pointing label diff-comment"></div></div></div></div></div></div><div class="bill"><div class="bill-meta"><div class="links ui tiered menu"><div class="menu"><div ng-show="bill_ref" class="item">提案編號 {{ bill_ref }}</div><div id="qrlink" class="item center right"><qrcode text="http://ly.g0v.tw/bills/{{bill_ref || bill_id}}" size="120"></qrcode></div><a ng-href="http://api.ly.g0v.tw/v0/collections/bills/{{bill_ref || bill_id}}" target="_blank" class="item hide-print"><i class="code icon"></i>JSON</a><a ng-href="http://misq.ly.gov.tw/MISQ/IQuery/misq5000QueryBillDetail.action?billNo={{ bill_id }}" target="_blank" class="item hide-print"><i class="icon flag"></i>立法院</a><a ng-show="report.doc.pdf" ng-href="{{report.doc.pdf}}" target="_blank" class="item hide-print"><i class="file icon"></i>審查報告</a><a ng-show="doc.pdf" ng-href="{{doc.pdf}}" target="_blank" class="item hide-print"><i class="icon download disk"></i>PDF</a><a ng-show="doc.doc" ng-href="{{doc.doc}}" target="_blank" class="item hide-print"><i class="icon download disk"></i>Word</a><a ng-init="show_related_bills=false" ng-show="bill_ref" ng-click="show_related_bills=!show_related_bills" class="right item"><i class="icon fork code"></i>相關議案</a></div><div ng-show="show_related_bills" class="ui sub menu related-bill"><div class="item">相關議案相關議案相關議案相關議案相關議案相關議案相關議案相關議案相關議案相關議案相關議案相關議案相關議案相關議案相關議案相關議案相關議案<div class="related-bill-action"><a ng-href="" target="_blank" class="ui small button icon labeled"><i class="icon forward mail"></i>前往此議案</a><a ng-href="" target="_blank" class="ui small button icon labeled"><i class="icon exchange"></i>比較此議案</a></div></div></div></div></div><div ng-if="bill_ref" class="bill-progress"><div class="common ui seven steps"><span ng-repeat="step in steps" class="stage"><a ng-click="showSub($index)" ng-class="step.status.step" class="ui step"><div class="step-description">{{step.description}}</div><div class="date">{{step.date}}</div></a><div ng-class="step.status.state" class="ui state"><i ng-class="step.status.icon" class="icon"></i></div></span></div><div ng-repeat="step in steps" ng-show="step.sub" class="ui small steps"><span ng-repeat="substep in step.detail" class="stage"><div ng-class="substep.status.step" class="ui step"><div class="substep-description">{{substep.description}}<i ng-show="substep.links" class="icon file"></i> p.<a ng-repeat="l in substep.links" target="_blank" ng-href="{{l.link}}">{{l.text}}</a></div><div class="date">{{substep.date}}</div></div><div ng-class="substep.status.state" class="ui state"><i ng-class="substep.status.icon" class="icon"></i></div></span></div></div><div ng-if="ttsmotions" class="ui list ttsmotions"><div class="item"><i class="icon down"></i>這應該要整合到上面的列表，但是還沒做好</div><div ng-repeat="ttsmotion in ttsmotions" class="item"><div class="content"><a class="header"><span ng-show="opts.show_date" ng-click="opts.show_date=!opts.show_date" class="date">{{ttsmotion.date | date:\'yyyy-MM-dd\' }}</span><span ng-show="!opts.show_date" ng-click="opts.show_date=!opts.show_date" class="sitting">{{ttsmotion.sitting_id}}</span><span>{{ttsmotion.progress || ttsmotion.summary}}</span></a><div class="description">{{ ttsmotion.resolution }}<i ng-show="ttsmotion.links" class="icon file"></i> p.<span ng-repeat="l in ttsmotion.links"><a target="_blank" ng-href="{{l.link}}" class="page">{{l.text}}</a></span></div></div></div></div><h1 title="{{summary}}" class="ui header bill">{{summary}}</h1><div class="summary"><p class="description">{{abstract}}</p></div><div class="role"><ul ng-show="committee" class="committee"><li ng-repeat="c in committee"><span><img ng-src="http://avatars.io/50a65bb26e293122b0000073/committee-{{c.abbr}}?size=medium" ng-alt="{{c.name}}" ng-class="{{c.abbr}}" class="avatar medium"><span class="name">{{c.name}}委員會</span></span></li></ul><div class="ui two column stackable grid"><div class="column left"><h2 ng-init="expand_sponsor=false" ng-click="expand_sponsor=!expand_sponsor" class="ui horizontal divider toggle"><span class="ui tiny black button">提案人<i class="icon unhide"></i></span></h2><div ng-show="sponsors" class="sponsors"><div ng-repeat="e in sponsors" legislator="e" ng-class="expand_sponsor? \'expanded\':\'simplified\'" class="item"></div></div></div><div ng-show="cosponsors" class="column right"><h2 ng-init="expand_cosponsor=false" ng-click="expand_cosponsor=!expand_cosponsor" class="ui horizontal divider toggle"><span class="ui tiny black button">連署人<i class="icon unhide"></i></span></h2><div ng-show="cosponsors" class="cosponsors"><div ng-repeat="e in cosponsors" legislator="e" ng-class="expand_cosponsor? \'expanded\':\'simplified\'" class="item"></div></div></div></div></div><div class="clearfix"></div><div class="history"></div><div class="clearfix"></div><div ng-show="related" class="related"><ul><li ng-repeat="r in related"><span><img ng-show="r.avatar" ng-src="http://avatars.io/50a65bb26e293122b0000073/{{r.avatar}}?size=small" ng-alt="{{r.name}}" ng-class="r.party" class="avatar"><span class="summary">{{r.summary}}</span></span></li></ul></div><div class="clearfix"></div><div ng-repeat="(i, d) in diff" scroll-spy class="content default"><a name="{{d.name}}" spy-target></a><h2 class="ui horizontal divider">{{d.name}}</h2><p class="sample"><span ng-hide="!d.diffbase" class="delete">{{d.diffbase}}</span><span ng-hide="!d.diffbase">vs</span><span ng-repeat="v in d.versions" ng-class="{insert: v == d.diffnew}" ng-bind="v" ng-click="setDiff(d, v)" class="version"></span></p><div ng-repeat="diffs in d.diffcontent" spy-target class="diff"><div ng-class="{two:d.diffbase, one:!d.diffbase}" ng-repeat="diffline in diffs.difflines" ng-hide="diffline.left == \'\' &amp;&amp; diffline.right == \'\'" class="column stackable ui grid"><div ng-hide="!d.diffbase" class="column left {{diffline.state}}"><div class="ui segment article-text"><a id="original-{{diffs.leftItemAnchor}}" ng-href="#original-{{diffs.leftItemAnchor}}" ng-show="$index == 0" style="margin-top: -90px; padding-top: 90px"><div class="ui ribbon label">{{diffs.leftItem}}</div></a><div ng-class="diffstate(\'left\', \'{{diffline.state}}\')" class="ui right corner label">{{difftxt(\'left\', diffline.state)}}</div><div href="" target="blank" ng-bind-html="diffline.left" class="diff text"></div></div></div><div class="column right right {{diffline.state}}"><div ng-class="{\'mobile-hide\': !diffline.right}" class="ui segment article-text"><a href="" target="blank" ng-show="$index == 0" class="ui ribbon label">{{diffs.rightItem}}</a><div ng-class="diffstate(\'right\', \'{{diffline.state}}\')" class="ui right corner label">{{difftxt(\'right\', diffline.state)}}</div><div href="" target="blank" ng-bind-html="diffline.right" class="diff text"></div></div></div></div><div ng-bind-html="diffs.comment" ng-show="diffs.comment" class="ui pointing label diff-comment"></div></div></div><div ng-show="showSidebar" class="content navigation visible-desktop mobile-hide"><div class="ui very thin sidebar"><div class="ui vertical menu"><div ng-repeat="(i, d) in diff track by $index" class="item-section"><a href="#{{d.name}}" spy class="item">{{d.name}}</a><div ng-repeat="diffs in d.diffcontent" class="law-unit-wrap"><div ng-show="diffs.leftItemAnchor" spy class="law-unit"><a ng-href="#original-{{diffs.leftItemAnchor}}" class="item">{{diffs.leftItem}}</a></div></div></div></div></div></div></div><script>$(".ui.dropdown").dropdown();</script>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('app/partials/calendar.jade', [
'<div ngx-resize class="calendar"><div class="ui top attached tabular menu"><a ng-class="{active: type == \'sitting\'}" ng-click="change(\'sitting\')" href="" class="item">一般議程</a><a ng-class="{active: type == \'hearing\'}" ng-click="change(\'hearing\')" href="" class="item">公聽會</a></div><div class="ui header time">立法院行程：<select ng-model="weeks" ng-options="o.label for o in weeksOpts" ng-change="update()"></select></div><div class="ui blue segment sitting"><h3 ng-hide="groupNum &gt; 0" class="ui header">本日無行程<!-- YS is not in committee mapping object, this is the customized block for it--></h3><div ng-show="group.YS" class="ui orange segment"><div class="ui header time">院會</div><table class="ui table segment"><thread><tr><th class="two wide">日期</th><th class="two wide">時間</th><th class="three wide">名稱</th><th class="nine wide">議程</th></tr></thread><tbody><tr ng-class="{negative:entry.onair}" ng-repeat="entry in group.YS"><td>{{entry.formatDate}}</td><td>{{entry.time_start}} 至 {{entry.time_end}}</td><td><a ng-href="/sittings/{{entry.sitting_id}}">{{entry.name}}</a></td><td>{{entry.summary}}</td></tr></tbody></table></div><div ng-repeat="(k, v) in group" ng-show="committees[k]" class="ui green segment"><div class="ui header time"><img ng-src="http://avatars.io/50a65bb26e293122b0000073/committee-{{k}}?size=small" class="avatar small"><span>{{committees[k]}}</span></div><table class="ui table segment"><thread><tr><th class="two wide">日期</th><th class="two wide">時間</th><th class="three wide">名稱</th><th class="one wide">主席</th><th class="eight wide">議程</th></tr></thread><tbody><tr ng-class="{negative:entry.onair}" ng-repeat="entry in group[k]"><td>{{entry.formatDate}}</td><td>{{entry.time_start}} 至 {{entry.time_end}}</td><td><a ng-href="/sittings/{{entry.sitting_id}}">{{entry.name}}</a></td><td>{{entry.chair}}</td><td>{{entry.summary}}</td></tr></tbody></table></div></div></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('app/partials/debates.jade', [
'<div ng-controller="LYDebates" ngx-resize class="debates"><div ng-grid="gridOptions" class="grid"></div></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('app/partials/legislator.jade', [
'<div class="image ui rounded corner hide-print"><i ng-class="iconClass" ng-if="iconClass" ng-alt="{{name}}" class="g0v-icon large"></i><a ng-href="{{twlylink}}" target="blank" ng-if="!iconClass"><img ng-src="{{avatar}}" ng-alt="{{name}}" ng-class="party" class="avatar"></a></div><div ng-hide="legislatorStyle.hideName" class="content"><div class="name">{{name}}</div></div><span class="infocard"><b></b><a href="http://fact.g0v.tw/wiki/{{name}}" target="blank" class="fact text">生平時間軸</a><a href="http://zh.wikipedia.org/wiki/{{name}}" target="blank" class="wiki text">Wikipedia</a><a ng-if="twlylink" ng-href="twlylink" target="blank" class="text">投票指南</a></span>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('app/partials/motions.jade', [
'<div ng-class="{list: sitting}" class="motions"><h1><a href="/motions/{{session}}">第八屆第二會期</a></h1><div ng-hide="sitting" class="row-fluid"><div class="span10 chart"></div><div class="span2 legends"></div></div><button id="btnTop" ng-controller="topBtnCtrl" ng-show="showBtn" ng-click="jumpToTop()" class="btn">Jump to Top</button><div ng-show="sitting" class="list"><h2>第 {{sitting}} 次院會</h2><div class="row-fluid"><div class="span2 sidebar"><ul class="nav nav-list"><li ng-repeat="s in allStatus" ng-click="setStatus(s.key)" ng-class="{active: s.key == status}"><a href="#">{{s.value}}</a></li></ul><input ng-model="filter" placeholder="Search" class="filter search-query"></div><div class="span10 content"><ul class="nav nav-tabs"><li ng-repeat="s in allTypes" ng-click="setType(s.key)" ng-class="{active: s.key == type}"><a href="#">{{s.value}}</a></li></ul><ul ng-class="{{type}}" class="motions"><li ng-repeat="e in entries | filter:{status: status} | filter:filter" class="row"><div class="avatars"><span ng-repeat="avatar in e.avatars"><img ng-src="http://avatars.io/50a65bb26e293122b0000073/{{avatar.avatar}}?size=small" ng-alt="{{avatar.name}}" ng-class="avatar.party" class="avatar"></span></div><div class="motion"><span class="item">{{ e.item }}</span><span class="proposer">{{ e.proposer }}</span><a ng-href="/bills/{{ e.id }}"><span class="summary">{{ e.summary }}</span></a></div><div class="resolution">{{ e.resolution }}</div></li></ul></div></div></div></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('app/partials/nav.jade', [
'<div class="ui top fixed inverted collapsible menu"><div class="container hide-print"><div class="header"><a href="/" class="left floated item header brand">國會大代誌</a><div class="ui mini right floated button"><i class="list icon"></i></div><a href="http://g0v.tw" target="_blank" class="right floated item g0v-logo"><img src="/img/g0v-icon-invert.png"></a></div><div class="content"><a ng-href="/calendar" ng-class="{active:activeTab == \'calendar\'}" class="item">預報</a><a ng-href="/sittings" ng-class="{active:activeTab == \'sittings\'}" class="item">會議</a><a ng-href="/debates" ng-class="{active:activeTab == \'debates\'}" class="item">質詢</a><div class="right floated menu"> <div class="item"><form ng-submit="submitSearch()" ng-controller="SearchFormCtrl" class="ui form search"><div class="ui icon input mini"><input id="global-search" type="text" placeholder="搜尋" ng-model="searchKeyword" auto-complete><i class="search icon"></i></div><div class="results"></div></form></div><a ng-href="/about" ng-class="{active:activeTab == \'about\'}" class="item about">關於</a><div class="item"><div data-send="false" data-href="https://facebook.com/g0v.tw" data-width="120" data-layout="button_count" data-show-faces="false" data-font="verdana" class="fb-like"></div></div></div><a href="http://github.com/g0v/ly.g0v.tw" class="ui top right attached label build-id">{{ config_build }}</a></div></div></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('app/partials/search.jade', [
'<div class="search"><div class="ui floating message"><span class="keyword">搜尋 {{keyword}}</span><span ng-show="busy" class="spinner small"></span><span ng-cloak ng-show="results.length &lt;= 0">，無搜尋結果</span></div><div ng-show="results.length &gt; 0" class="results"><div ng-repeat="r in results" class="content ui segment"><div class="ui top left attached label red">{{r.proposed_by}}</div><div class="body"><span class="name"><a ng-href="/bills/{{r.bill_ref || r.bill_id}}">{{r.summary}}</a></span><p class="description">{{r.abstract}}</p></div><div class="ui bottom attached label"><span ng-repeat="s in r.sponsors" class="sponsor">{{s}}</span></div></div></div><h4 detect-visible="moreResults()">目前找到：{{results.length}} 筆</h4><span ng-show="busy" class="spinner small"></span></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('app/partials/sittings-new.jade', [
'<div class="ly-bill"><!-- TODO implement the filter--><!-- See http://g0v.github.io/semantic-ui-experiment/ly-bill.html--></div><div class="bill list"><!--.ui.horizontal.divider 處理中--><div class="two column ui stackable grid"><!-- Some motions are not yet implemented and marked as hidden.--><!-- TODO: Implement them.--><div ng-repeat="motion in motions | filter:{show: true}" class="column"><div class="bill ui segment orange"><div class="ui left corner label">{{motion.category}}</div><!--.ui.top.right.attached.label(ng-class="motion.date_class") 本次會議正在進行：{{motion.date}}--><div class="summary"><p><a href="//ly.g0v.tw/bills/{{motion.bill_id}}">{{motion.summary}}</a></p></div><div class="ui bottom attached label"><div class="legislator image ui rounded corner"><span>{{motion.committees}}　提案</span><span ng-repeat="avatar in motion.sponsor_avatars"><img src="http://avatars.io/50a65bb26e293122b0000073/{{avatar}}?size=small" class="small_avatar DPP"></span><span>　連署</span><span ng-repeat="avatar in motion.cosponsor_avatars"><img src="http://avatars.io/50a65bb26e293122b0000073/{{avatar}}?size=small" class="small_avatar DPP"></span></div></div></div></div></div><!-- TODO implement more types.  See http://g0v.github.io/semantic-ui-experiment/ly-bill.html--></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('app/partials/sittings.jade', [
'<div ng-cloak class="sittings"><script src="https://www.youtube.com/iframe_api"></script><script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.3.3/d3.min.js"></script><div id="select-sitting" ng-hide="video" class="ui menu"><div class="ui dropdown item"><input type="hidden"><div class="text">選擇院會/委員會</div><i class="dropdown icon"></i><div class="menu"><div ng-click="setContext(\'YS\')" class="item">院會</div><div ng-repeat="(type, name) in committees" ng-click="setContext(type)" class="item">{{name}}</div></div></div><div class="item"><select ng-model="chosenSitting" ng-options="sitting.name for sitting in currentList"></select><span ng-show="loadingSitting" class="spinner small"></span></div><a ng-show="videos.length &gt; 0 &amp;&amp; !loaded" ng-href="/sittings/{{id}}/video" class="ui button right item">觀看影片</a></div><div id="sitting-summary"><h1 class="ui header">{{ name }}</h1><div class="role"><div ng-show="!committee" class="committee"><img ng-src="http://avatars.io/50a65bb26e293122b0000073/committee-YS?size=medium" ng-alt="院會" ng-class="" class="avatar"><div class="name">院會</div></div><div ng-show="committee" ng-repeat="c in committee" class="committee"><img ng-src="http://avatars.io/50a65bb26e293122b0000073/committee-{{c.abbr}}?size=medium" ng-alt="{{c.name}}" ng-class="{{c.abbr}}" class="avatar"><div class="name">{{c}} 委員會</div></div></div><!-- XXX use mly filter to set styles--><div class="schedule"><table class="ui basic table"><tr ng-show="dates[0].chair"><th class="four wide">主席</th><td>{{ dates[0].chair }}</td></tr><tr ng-show="dates" ng-repeat="entry in dates"><th class="four wide">{{entry.date}}</th><td>{{entry.time_start}} -  {{entry.time_end}}</td></tr><tr ng-show="summary"><th class="four wide">概要</th><td>{{ summary }}</td></tr><tr ng-show="proceeding_url"><th class="four wide">議事錄</th><td><a ng-href="{{ proceeding_url }}" target="_blank">PDF</a></td></tr></table></div></div><div id="video" ng-show="video"><div class="player wrapper"><div id="player"></div></div><div class="share wrapper"><div id="share"><span class="actions"><div title="分享至Facebook" ng-href="https://www.facebook.com/sharer.php?u={{sharelinkEscaped}}&amp;via=lyg0vtw" target="_blank" class="ui tiny facebook button"><i class="facebook icon"></i></div><div title="分享至Twitter" ng-href="https://twitter.com/intent/tweet?url={{sharelinkEscaped}}" target="_blank" class="ui tiny twitter button"><i class="twitter icon"></i></div><div title="分享至Google Plus" href="https://plus.google.com/share?url={{sharelinkEscaped}}" target="_blank" class="ui tiny google plus-sign button"><i class="google plus icon"></i></div></span><div class="ui input"><input id="sharelink" type="text" ng-model="sharelink" size="30"></div><strong>開始時間</strong><input id="changeoffset" type="checkbox" ng-model="shareOffset"><div ng-show="shareOffset" name="offset" class="timeoffset"><span class="offset"><strong>開始日期</strong><div class="ui input"><input id="dateoffset" type="text" ng-model="dateOffset" size="10"></div></span><span class="offset"><strong>開始時間</strong><div class="ui input"><input id="timeoffset" type="text" ng-model="timeOffset" size="10"></div></span></div></div></div><div ng-repeat="waveform in waveforms track by $index" class="wav-group"><ng-waveform ng-model="waveform"></ng-waveform></div><div id="avatar-tooltip" class="ui label pointing below"><img class="ui image"><div class="name"></div><button class="ui tiny button"><i class="icon play"></i></button></div></div><div id="motions" ng-hide="video"><div class="ui menu"><a ng-repeat="s in allTypes" ng-click="setType(s.key)" ng-class="{active: s.key == type}" class="item">{{s.value}}</a><!-- todo: show motion count in tabular menu--><div class="item"><div class="ui icon input"><input ng-model="filter" placeholder="輸入關鍵字過濾列表"></div></div><!-- issue: don\'t know how to put .item to right without creating a new row in this menu, weird--></div><div ng-class="{{type}}" class="motions"><div ng-repeat="e in entries | filter:filter" class="item"><div class="avatars"><div ng-repeat="avatar in e.avatars" legislator="avatar" legislator-style="{hideName: true}" class="item"></div></div><div class="ui segment motion"><span class="item-heading">{{ e.item }}</span><span class="proposer">{{ e.proposed_by }}</span><a ng-href="/bills/{{ e.bill_ref || e.bill_id }}" class="summary">{{ e.summary }}</a><div ng-show="e.sitting_introduced == sitting_id" class="ui red label">new</div></div><div class="resolution">{{ e.resolution }}</div></div></div><!-- XXX: show onair and upcoming ivod link--><!-- XXX: search archived ivod clips for past sittings--><!-- XXX: show agenda from misq, annotated with info from npl--><!-- XXX: show debates, wrans if YS--></div></div><script>$(\'.ui.dropdown\').dropdown()</script>',''].join("\n"));
}]);
