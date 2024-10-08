# animation-web-design Web前端动漫主题页面设计
一、摘要
此次设计的主题是宫崎骏动漫作品展示，宫崎骏的动漫不仅仅是丰满的人物情节，更重要的是故事背后深刻的教育意义。本设计作品主要利用HTML5+CSS技术，通过首页、精彩片段、宫崎骏简介、在线影院等多个模块进行作品介绍展示，以精美封面提高作品的观赏性，以丰富的文字内容提高作品的可读性，在此网站，用户可以在线观看宫崎骏的作品，了解作品的人物介绍。同时，还利用js技术，设计了有趣的人物小测试，让用户在了解作品的同时可以认识电影角色，增强用户体验感，更好实现服务目标。
二、主要内容
1.总体设计
1.1网站布局框架制作
布局是个人网站最具吸引力的根本所在，本网站采用大图banner布局，包括顶部导航栏、顶部banner大图、主要内容区域以及页面底部。
1.2色彩搭配
网站主体配色为白、蓝、黄三色，纯洁的白色中间插入清新的蓝色和明快的黄色，使得页面保持整洁的同时又突出重点，更符合宫崎骏作品的人与自然和谐共生的创作理念。
1.3 header/footer公共部分
对于顶部导航栏和底部版权说明，都属于各个模块的公共部分，采用iframe内联框架进行链接。iframe引入header发现顶部未紧贴，将body的margin设为auto即可对齐。此外iframe的scrolling属性设为no即可去掉右边的滚动条。
但是会遇到两个问题：1.用iframe的话就显示不了鼠标悬停时隐藏的层，所以只将首页的header再写一遍，其他界面都用iframe链接。2.如果不在新的标签页打开的话就会导致新的想要打开的html文件被覆盖而显示不了。因此，为避免页面被覆盖，需要将target属性设为“_parent”，表示将链接的画面内容作为文件的上一个画面。即：当前窗口打开。此外，还需将在style样式中将scrolling属性设为“no”,即可去除iframe框架右边的滚动条。特别要注意_parent和_top的区别：
（1）target=_parent，将链接的文件载入含有该链接框架的父框架集或父窗口中。如果含有该链接的框架不是嵌套的，则在浏览器全屏窗口中载入链接的文件，就象_self参数一样。 
（2）target=_top，在当前的整个浏览器窗口中打开所链接的文档，因而会删除所有框架不写的话就是表示默认值，默认值一般跟浏览器有关。 
比如：
网A中镶嵌iframe了网页B，网页B又镶嵌iframe了网页C：
1. 如果网页C中连接设置target=_parent，则跳将网页B去掉直接A中嵌入网页C中链接页面;
2. 而如果网页C中target=_top ，则直接跳出所有iframe框架，直接转向C中链接页面。
2.模块化设计
2.1 首页
   
 ![image](https://github.com/user-attachments/assets/2f91215f-07c3-4b83-99fc-2706dcb4d9f9)

1.1

![image](https://github.com/user-attachments/assets/51a6f4d9-9135-4510-97ed-0d75887509ea)

1.2
图1.1是初稿，nav+a标签实现导航栏部分，a标签是块级元素，需设置float为left让标签在同一行；将margin值设为“auto”使大图部分紧贴导航栏，顶部导航栏设计有悬停动画展示，设置隐藏的图片盒子的position为“absolute”,脱离文档流，使图片可以重叠在banner大图上。同时js实现音乐播放、时间显示效果，图1.2是最终效果，相比初稿，更换了背景颜色，导航栏文字和时间显示效果更突出，更加方面用户的使用。但去除了导航悬停时的图片层展示和音乐播放，具体原因将在结语处给出。同时，为了增强页面的交互性，新增了js的图片路径切换功能，也用js写了用户登录功能，在3会具体介绍。

![image](https://github.com/user-attachments/assets/02769533-dd47-48c9-a996-09d543cd8096)

1.3

![image](https://github.com/user-attachments/assets/c8d62813-9463-4d6b-9c7a-e7d8887a58e1)

1.4
首页主要内容部分是宫崎骏作品的图片展示，如图1.3、1.4，CSS部分设置了boxshadow动态阴影效果，利用opacity属性设置浮动时有一层透明幕布效果，
opacity是透明度设置，取值范围0.0-1.0,取值越小透明度越高。
还在层添加了蓝色的小图标，富有童趣性，需要注意的是需要将中间部分的电影图片展示区的clear设为“both”,表示左右都不能有元素，防止滑到上面简介的缝隙里。图1.3点击中间文字区域可以切换不同主题图片，也是利用js实现点击图片路径的切换达到效果。js原理和（1）banner大图切换一致。图1.4设置video标签以及封面，将来可以增设视频播放区，由于文件大小限制，就不作展示了。在界面右侧设置了一个a锚标记，实现一键跳转到顶部。

注意script标签的放置位置不同效果也不同：
1.放在head内body前面：
  浏览器解析HTML，解析到script标签时，会先下载完所有script，再往下解析其他的HTML标签。
2.body后面：
  浏览器会先解析完整个HTML页面，再下载js，这样的话，如果js执行出错了，最起码页面中的元素还可以加载出来，因为DOM文档是从上往下的顺序执行的。 
这也验证了浏览器是从上往下逐步解析页面结构的。
2.2 精彩片段

 ![image](https://github.com/user-attachments/assets/d11f684e-e85e-4b76-827a-a1be799a534d)
 
1.5
在“精彩片段”处设置了一个隐藏的盒子，悬停时显示，display属性为none和block实现。链接全局的global.css样式，只在第一部分设置一个div层，实现电影展示区，绑定onclick实现点击直接跳转网址到电影播放界面，加上一个css的动态悬停效果。
2.3 宫崎骏简介

![image](https://github.com/user-attachments/assets/1fb88ec8-e7ab-4528-8a9b-0f0a9033bbcc)

1.6
利用CSS的display属性设置隐藏层，实现悬停切换图片。

2.4 在线影院

![image](https://github.com/user-attachments/assets/5e19c973-182e-46c4-8363-04d3213bee08)

1.7
CSS的hover实现动态的图片边框颜色变换，每个图片层设置一个隐藏的文字层，用于展示电影作品简介，同时图片绑定onclick事件实现超链接跳转到电影播放网址，如：
onclick="location.href='http://www.sypydj.com/donghuapian/qianyuqianxun/1-1.html'"

2.5 更多

![image](https://github.com/user-attachments/assets/7cefae47-38b8-4ec7-9987-b9efa55dbbf8)

1.8
form表单获取用户基本信息，js实现留言功能以及测试部分，具体见3。
3.用户交互
3.1 人物测试
留言区评论层级逐层递增，通过document文档创建li标签实现留言功能，通过innerHTML将li的内容改为value，最后再用appendChild()、insertBefore()方法将li标签插入网页中。insertBefore(e1,e2)表示在e2前面插入元素e1，e2必须是父元素e1的子元素，如果不是的话会报错。同时遍历span标签利用removeChild(this.parent)方法删除当前span元素的父元素可以实现留言点击删除。
在测试界面，利用js的alert警告进行信息提示验证，更符合常规的web网页制作规范，再利用prompt提示，confirm确认框进行测试实现。测试结果是利用多个if语句嵌套实现的。
（1）发送空留言会有警告

![image](https://github.com/user-attachments/assets/b5d0b628-785e-4b2a-8ca9-0e5fb6fc0a43)

1.9

（2）未填基本信息无法进入测试

![image](https://github.com/user-attachments/assets/dd6a0087-25e2-4302-9ab2-4f8402092b13) 

2.0
（3）测试

 ![image](https://github.com/user-attachments/assets/f27878f6-60f2-42df-9263-bd2be70082de)
 
2.1

 ![image](https://github.com/user-attachments/assets/efd3bd93-00ed-498f-bb81-c26927fd395b)
 
2.2 
3.2 用户登录注册

![image](https://github.com/user-attachments/assets/708140d6-c853-469e-97e5-15db798c3a75)

2.3

 ![image](https://github.com/user-attachments/assets/c594509a-96d4-450c-80dd-8298207ab24d)
 
2.4
输入用户名和密码，js进行验证，如果验证成功就显示成功登录；对于首次登录的用户，还可以进行注册。关于验证功能，创建了两个Array数组存放用户名和密码，通过遍历数组实现验证。但是发现实现不了，原因应该是存放用户名和密码的数组没有共享，所以对于登录注册还是需要后端进行实现的。前端只能实现登录注册界面的页面布局。
三、小结
本网站设计还存在许多不足的地方，比如首页的悬停图片显示由于使用了内联框架，被覆盖掉了，如果能显示成功的话能够提高界面的交互性；音乐播放器利用的是js的Audio.play(),如果绑定onclick事件的话只能点击一次，不能实现点击第二次暂停音乐，针对以上两个问题，暂时没有找到合适的解决方法，之后也会继续找合适的方法。通过这次制作实验，我也明白了网站制作不仅要能够把用户要求的内容呈现出来，还要满足布局良好、界面美观、配色优雅、表现形式多样等要求，这就需要一个丰富的知识储备，不仅要熟练掌握最基本的html标签，还需要各种属性的取值，。
知识只有会实际运用才算真的学会了，在制作的过程中也是检验上课知识的一个过程，并由此扩展更多的问题，再利用网络搜索，这样能够很好的掌握知识的同时拓展更多的课外知识。真的很享受自己做网页的过程，每次经过自己用心得寻找图片素材，学习美观的颜色搭配和布局，甚至睡觉前还在想应该怎么去设计布局互动之类的，看到最后成果的时候，真的有一种巨大的满足感，这种强烈的求知感也让我更好的理解了学习的意义。同时通过实践也发现了网站制作难的不是制作，而是设计，所以说一个好的网站应该还需要有用心的设计。希望以后在制作网站的时候能花更多的时间去完善设计部分。

