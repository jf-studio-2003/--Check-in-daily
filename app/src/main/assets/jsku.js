// JavaScript Document

// ��ȡԪ��ID
  function xs(b) {
      return document.getElementById(b);
    };
	
	
	
	//  ����ĳID��ֵ  ��ʽ  idv("1"); 

function idv(a) {
	return document.getElementById(a).value;
}

	
	
// �滻�� -  
	
	function ti_huan(b) {
      return b.replace(/a/g, "");
    };
	
	
	
// ������Ч���� ����ֱ��������Ƶ�ļ�
//var audio = new Audio('./yin_xiao.wav');

// Ҳ���Ե���������Ч·��
//audio.src = './yin_xiao_2.wav';

// ������Ƶ
//audio.play();

	
	



 // ˢ����ҳ location.reload()
 




// ��ȡURLֵ 
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}



// ��ȡ���ش洢��KEY	 
function lsk(b) {	 
	return localStorage.key(b);
	 
	  };
	  
 // ��ȡ���ش洢��value	
function lsv(b) {
	return localStorage.getItem(localStorage.key(b));
	
	 };
	 
	 
// ת������ֵ����
function sz(b) {
return Number(b);
 };
 
 // ����������ȡ��ֵ���͵ı��ش洢ֵ
 function c(a) {

return sz(ti_huan(lsv(a)));
  };
  
   // ����������ȡ��ֵ���͵ı��ش洢ֵ
 function lsv_sz(a) {

return sz(ti_huan(lsv(a)));
  };

 // ��ȡ���ش洢��value	����
function lsv_br(a,b) {
  a =a+ localStorage.getItem(localStorage.key(b))+"<br>";
	return a;
	 };
 
 
 // �����������
 function tj(a) {
var cvd="";
 if ( a>1,a < 3)
{cvd = "xiao";}
else if  ( a > 5,a<10)
{cvd = "zhong";}

else if  ( a > 10,a<20)
{cvd = "da";}
return cvd
  };
  
  
 function jy() { 
return  s.getItem(s.key(i-1))
 };
 
 
  function jon(a) { 
return   JSON.parse(a);
  };
  
  
  //��ת����ҳ������ʼ
function home_html(){
//��ת����ҳ
window.location.href='index.html'

};
//��ת����ҳ��������

//��ת����Ӻ�����ʼ
function add_html(){
//��ת�����
window.location.href='add.html'

};
//��ת����Ӻ�������

//��ת��ɾ��������ʼ
function del_html(){
//��ת��ɾ��
window.location.href='del.html'

};
//��ת��ɾ����������

//��ת����ʷ��¼������ʼ
function history_html(){
//��ת����ʷ��¼
window.location.href='history.html'

};
//��ת����ʷ��¼��������

//��ת���ҵĺ�����ʼ
function about_html(){
//��ת���ҵ�
window.location.href='about.html'

};
//��ת���ҵĺ�������


//��ֹѡ��,Ҳ�����޷�����
document.onselectstart=new Function("event.returnValue=false;");  
