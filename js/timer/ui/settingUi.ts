/* 计时器的[设置 界面] */
class SettingUi{

    /* 变量 */
    //是否显示了[设置]界面？
    private isShowUi:boolean;
    //是否显示了[选择语言]面板？
    private isShowChooseLanguagePanel:boolean;
    //是否拖动[音量的块]？
    private isDragVolumeSliderRound:boolean;

    /* 元素 */
    //设置界面
    private uiElement:HTMLElement;
    //关闭按钮
    private closeButtonElement:HTMLElement;
    
    //当前语言 按钮
    private currentLanguageButtonElement:HTMLElement;
    //英语 图片
    private englishImageElement:HTMLElement;
    //中文 图片
    private chineseImageElement:HTMLElement;
    //选择语言 面板
    private chooseLanguagePanelElement:HTMLElement;
    //英语 按钮
    private englishButtonElement:HTMLElement;
    //中文 按钮
    private chineseButtonElement:HTMLElement;
    
    //Staff面板
    private staffPanelElement:HTMLElement;
    //Staff按钮
    private staffButtonElement:HTMLElement;
    //Github按钮
    private githubButtonElement:HTMLElement;

    //音量滑动条的面板
    private volumeSliderPanelElement:HTMLElement;
    //音量滑动条的块
    private volumeSliderRoundElement:HTMLElement;
    //音量数字的面板
    private volumeNumberPanelElement:HTMLElement;
    //音量数字的文字
    private volumeNumberTextElement:HTMLElement;




    /* 属性 */
    //变量：是否显示了[设置]界面？
    public get IsShowUi():boolean{
        return this.isShowUi;
    }

    //元素：设置界面
    public get UiElement():HTMLElement{
        return this.uiElement;
    }

    

    /* 构造函数 */
    constructor(){

        /* 初始化 */
        //初始化[变量]
        this.isShowUi = false;
        this.isShowChooseLanguagePanel = false;
        this.isDragVolumeSliderRound = false;

        //初始化[组件]
        this.uiElement = document.querySelector("#settingUi");
        this.closeButtonElement = document.querySelector("#settingUi .closeButton");
        this.currentLanguageButtonElement = document.querySelector("#settingUi .language .currentLanguage");
        this.englishImageElement = document.querySelector("#settingUi .language .currentLanguage .english");
        this.chineseImageElement = document.querySelector("#settingUi .language .currentLanguage .chinese");
        this.chooseLanguagePanelElement = document.querySelector("#settingUi .language .chooseLanguage");
        this.englishButtonElement = document.querySelector("#settingUi .language .chooseLanguage .english");
        this.chineseButtonElement = document.querySelector("#settingUi .language .chooseLanguage .chinese");
        this.staffPanelElement = document.querySelector("#settingUi .staffPanel");
        this.staffButtonElement = document.querySelector("#settingUi .staffButton");
        this.githubButtonElement = document.querySelector("#settingUi .githubButton");
        this.volumeSliderPanelElement = document.querySelector("#settingUi .volumeSlider");
        this.volumeSliderRoundElement = document.querySelector("#settingUi .volumeSlider .round");
        this.volumeNumberPanelElement = document.querySelector("#settingUi .volumeNumber");
        this.volumeNumberTextElement = document.querySelector("#settingUi .volumeNumber .number");


        /* 改变this的指向（指向当前这个TitleBarUi的对象） */
        let onMouseDownButton = this.OnMouseDownButton.bind(this);
        let onClickCloseButton = this.OnClickCloseButton.bind(this);
        let onClickCurrentLanguageButton = this.OnClickCurrentLanguageButton.bind(this);
        let onClickEnglishButton = this.OnClickEnglishButton.bind(this);
        let onClickChineseButton = this.OnClickChineseButton.bind(this);
        let onClickGithubButton = this.OnClickGithubButton.bind(this);
        let onMouseEnterStaffButton = this.OnMouseEnterStaffButton.bind(this);
        let onMouseLeaveStaffButton = this.OnMouseLeaveStaffButton.bind(this);
        let onMouseEnterVolumeSliderPanel = this.OnMouseEnterVolumeSliderPanel.bind(this);
        let onMouseLeaveVolumeSliderPanel = this.OnMouseLeaveVolumeSliderPanel.bind(this);
        let onMouseDownVolumeSliderRound = this.OnMouseDownVolumeSliderRound.bind(this);
        let onMouseMoveVolumeSliderRound = this.OnMouseMoveVolumeSliderRound.bind(this);
        let onMouseUpVolumeSliderRound = this.OnMouseUpVolumeSliderRound.bind(this);
        let onContextMenuUi = this.OnContextMenuUi.bind(this);


        /* 注册事件 */
        this.closeButtonElement.onclick = onClickCloseButton;
        this.currentLanguageButtonElement.onclick = onClickCurrentLanguageButton;
        this.englishButtonElement.onclick = onClickEnglishButton;
        this.chineseButtonElement.onclick = onClickChineseButton;
        this.githubButtonElement.onclick = onClickGithubButton;

        this.staffButtonElement.onmouseenter = onMouseEnterStaffButton;
        this.staffButtonElement.onmouseleave = onMouseLeaveStaffButton;
        this.volumeSliderPanelElement.onmouseenter = onMouseEnterVolumeSliderPanel;
        this.volumeSliderPanelElement.onmouseleave = onMouseLeaveVolumeSliderPanel;

        this.volumeSliderRoundElement.onmousedown = onMouseDownVolumeSliderRound;
        this.uiElement.parentElement.parentElement.onmousemove = onMouseMoveVolumeSliderRound;
        this.uiElement.parentElement.parentElement.onmouseup = onMouseUpVolumeSliderRound;

        this.currentLanguageButtonElement.onmousedown = onMouseDownButton;
        this.englishButtonElement.onmousedown = onMouseDownButton;
        this.chineseButtonElement.onmousedown = onMouseDownButton;
        this.closeButtonElement.onmousedown = onMouseDownButton
        this.staffButtonElement.onmousedown = onMouseDownButton;
        this.githubButtonElement.onmousedown = onMouseDownButton;

        this.uiElement.oncontextmenu = onContextMenuUi;

    }



    /* 公开方法 */
    /* [打开/关闭 此界面] 
       参数1：true是打开，false是关闭*/
    public OpenOrCloseUi(_isOpen:boolean){

        //如果是打开[设置界面]
        if(_isOpen == true){

            //打开设置界面     
            this.isShowUi = true;//修改标识符
            TimerApp.Uis.TitleBarUi.SettingToggleElement.style.backgroundColor = "#e3e3e3";//按钮的背景颜色
            this.UiElement.style.visibility = "visible";//显示
            this.uiElement.parentElement.style.overflow = "visible";//超出边框的内容 不隐藏

        }

        //如果是关闭[设置界面]
        else{

            //关闭设置界面     
            this.isShowUi = false;//修改标识符
            this.OpenOrCloseChooseLanguagePanel(false);//关闭[选择语言面板]
            TimerApp.Uis.TitleBarUi.SettingToggleElement.style.backgroundColor = "transparent";//按钮的背景颜色
            this.UiElement.style.visibility = "hidden";//隐藏
            this.uiElement.parentElement.style.overflow = "hidden";//超出边框的内容 自动隐藏

        }

    }

    /* [更新 音量]
      （更新音量相关的元素）
       参数1：音量的大小（0-100）*/
    public UpdateVolume(_volume:number){

        /* 修改[音量滑块]位置：
           把整个滑动条，划分为10块，每9像素为1块。
           滑块的滑动范围是4到94，
           每隔9像素，移动一次 */
        //移动位置
        this.volumeSliderRoundElement.style.left = _volume/10*9+4 + "px";

        /* 修改[音量数字] 的值 */
        this.volumeNumberTextElement.innerText = _volume+"";

    }

    /* [更新 语言]
        参数1：语言的类型 */
    public UpdateLanguage(_language:LanguageType){
        
        //如果是中文
        if(_language == LanguageType.Chinese){
            //隐藏英语
            this.englishImageElement.style.opacity = "0";
            //显示中文
            this.chineseImageElement.style.opacity = "1";
        }

        //如果是英文
        else{
            //隐藏中文
            this.chineseImageElement.style.opacity = "0";
            //显示英语
            this.englishImageElement.style.opacity = "1";
        }

    }
    


    /* 私有方法 */
    /* [打开/关闭 选择语言 的面板] 
       参数1：true是打开，false是关闭*/
    public OpenOrCloseChooseLanguagePanel(_isOpen:boolean){

        //如果是打开[选择语言 的面板]
        if(_isOpen == true){

            //打开[选择语言 的面板]     
            this.isShowChooseLanguagePanel = true;//修改标识符
            this.currentLanguageButtonElement.style.backgroundColor = "#e3e3e3";//按钮的背景颜色
            this.chooseLanguagePanelElement.style.visibility = "visible";//显示

        }

        //如果是关闭[选择语言 的面板]
        else{

            //关闭[选择语言 的面板]     
            this.isShowChooseLanguagePanel = false;//修改标识符
            this.currentLanguageButtonElement.style.backgroundColor = "transparent";//按钮的背景颜色
            this.chooseLanguagePanelElement.style.visibility = "hidden";//隐藏

        }

    }

    

    /* 事件 */
    //当按下按钮时（按下所有的按钮时）
    private OnMouseDownButton():void{

        //播放音效
        TimerApp.Systems.AudioSystem.PlayAudio(AudioType.ButtonDown);

    }

    
    //当点击[关闭]按钮时
    private OnClickCloseButton():void{
        
        //关闭这个设置界面
        this.OpenOrCloseUi(false);

    }
    //当点击[当前语言]按钮时
    private OnClickCurrentLanguageButton():void{
    
        //如果[选择语言的面板]是关闭的
        if(this.isShowChooseLanguagePanel == false){
            //就打开[选择语言的面板]
            this.OpenOrCloseChooseLanguagePanel(true);
        }

        //如果[选择语言的面板]是打开的
        else{
            //就关闭[选择语言的面板]
            this.OpenOrCloseChooseLanguagePanel(false);
        }

    }
    //当点击[英语]按钮时
    private OnClickEnglishButton():void{

        //修改当前的语言
        this.UpdateLanguage(LanguageType.English);

        //设置语言
        TimerApp.Systems.LanguageSystem.SetLanguage(LanguageType.English);

        //保存
        TimerApp.Systems.SaveSystem.Save();

        //关闭[选择语言的面板]
        this.OpenOrCloseChooseLanguagePanel(false);

    }
    //当点击[中文]按钮时
    private OnClickChineseButton():void{

        //修改当前的语言
        this.UpdateLanguage(LanguageType.Chinese);

        //设置语言
        TimerApp.Systems.LanguageSystem.SetLanguage(LanguageType.Chinese);

        //保存
        TimerApp.Systems.SaveSystem.Save();

        //关闭[选择语言的面板]
        this.OpenOrCloseChooseLanguagePanel(false);

    }
    //当点击[Github]按钮时
    private OnClickGithubButton():void{

        //打开[Easy Cat Timer]的 Github页面
        window.open("https://github.com/xujiangjiang/Easy-Cat-Timer","_blank");

    }


    //当鼠标进入[Staff]按钮时
    private OnMouseEnterStaffButton():void{
        //显示 [Staff按钮]
        this.staffPanelElement.style.opacity = "1";
    }
    //当鼠标移出[Staff]按钮时
    private OnMouseLeaveStaffButton():void{
        //隐藏 [Staff按钮]
        this.staffPanelElement.style.opacity = "0";
    }
    //当鼠标进入[音量滑动条]面板时
    private OnMouseEnterVolumeSliderPanel():void{
        //显示 [音量数字 面板]
        this.volumeNumberPanelElement.style.opacity = "1";
    }
    //当鼠标移出[音量滑动条]面板时
    private OnMouseLeaveVolumeSliderPanel():void{
        //隐藏 [Staff按音量数字 面板]
        this.volumeNumberPanelElement.style.opacity = "0";
    }


    //当鼠标开始拖到[音量滑动条]块时
    private OnMouseDownVolumeSliderRound(e:MouseEvent):void{

        //如果是左键点击
        if(e.button == 0){

            //修改标识符
            this.isDragVolumeSliderRound = true;

        }

    }
    //当鼠标正在拖动[音量滑动条]块时
    private OnMouseMoveVolumeSliderRound(e:MouseEvent):void{

        //如果正在拖动
        if(this.isDragVolumeSliderRound == true){

            //如果鼠标的位置是0，那么就不继续运行啦
            if(e.clientX < this.uiElement.parentElement.offsetLeft)return;

            //获取鼠标的位置（鼠标相对于浏览器左上角的位置）
            let _mouseX:number = e.clientX;//X坐标

            //获取[音量滑动条的面板]的位置（面板的左上角 相对于 浏览器左上角 的位置）
            let _volumeSliderPanelX:number = this.volumeSliderPanelElement.offsetLeft + this.uiElement.parentElement.offsetLeft;

            //偏移量（"鼠标的位置"和 "音量滑动条面板位置" 的距离）
            let _offsetX:number = _mouseX - _volumeSliderPanelX ;

            //现在滑动到百分之多少了？（音量的大小是多少？）
            let _value = Math.floor((_offsetX-4)/9) * 10;

            //音量最多是100，最少是0
            if(_value>100){
                _value = 100;
            }
            else if(_value<0){
                _value = 0;
            }

            //如果音量没有改变，就不运行下面的代码
            if(TimerApp.Datas.volume == _value)return;

            //修改音量
            TimerApp.Datas.volume = _value;

            //修改Ui的显示
            this.UpdateVolume(_value);

        }
        
    }
    //当鼠标拖动结束[音量滑动条]块时
    private OnMouseUpVolumeSliderRound(e:MouseEvent):void{

        //如果正在拖动
        if(this.isDragVolumeSliderRound == true){

            //修改标识符
            this.isDragVolumeSliderRound = false;

            //修改音量系统 中的音量
            TimerApp.Systems.AudioSystem.UpdateVolume(TimerApp.Datas.volume);

            //读取数据
            TimerApp.Systems.SaveSystem.Save();

        }

    }


    //当显示[设置界面]的右键菜单时
    private OnContextMenuUi():boolean{

        //不显示右键菜单
        window.event.returnValue=false;  
        return false; 

    }

}
