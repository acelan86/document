/**
 * Created by jy on 2016/1/22.
 */
var data1=['12','13','14','15','16','17','18','19','20','21','22','23','00','01','02','03','04','05','06','07','08','09','10','11'];
var data2=['30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29'];

function $(id){return document.getElementById(id)};
function X_x(strhtml){return strhtml.replace(/(\d+\.?\d*)px/g,function(){return parseFloat((arguments[1])*X).toFixed(5)+"px";});}
var __Body=null;
var cs=null;
var X=null;
var hkj=null;
var mkj=null;

function show()
{
    alert(hkj.selectvalue+":"+mkj.selectvalue);
}

function scrollTennt(id,data,class1,class2,_w,_h,_p)
{
    this.selectvalue="00";
    var my=this;

    var bc=parseInt(_p/2);

    var len=data.length;
    var hlen=parseInt(data.length/2)+(data.length%2);
    var newobj=$(id);
    newobj.style.cssText="float:left;width:"+_w+"px;height:"+(_p*_h)+"px;overflow: hidden;"+class1;

    var cnewobj = document.createElement('div');
    cnewobj.style.cssText="width:"+_w+"px;height:"+(len*_h)+"px;text-align: center;";

    for(var i=0;i<len;i++)
    {
        var ct = document.createElement('div');
        ct.style.cssText="width:"+_w+"px;height:"+_h+"px;line-height:"+_h+"px";
        ct.innerHTML=data[i];
        cnewobj.appendChild(ct);
    }
    newobj.appendChild(cnewobj);



    var ncobj=$(id).childNodes[0];
    var hand = new IScroll('#'+id, {});
    hand.scrollToElement(ncobj.childNodes[hlen-bc],0);//�ѵ�28���ӽڵ��ö�����ʵ���൱�ڰ�00�������ĵ�
    my.selectvalue=ncobj.childNodes[hlen].innerHTML;



    function n_init()
    {
        if(nqt)
        {
            nqt=false;
            if(ntb>_ntb)
            {
                for(var i=0;i<(hlen-np);i++)
                {
                    ncobj.insertBefore(ncobj.lastChild,ncobj.firstChild);
                }
            }
            else
            {
                for(var i=0;i<(np-hlen);i++)
                {
                    ncobj.appendChild(ncobj.firstChild);
                }
            }
            hand.scrollToElement(ncobj.childNodes[hlen-bc],0);
            hand.refresh();
            my.selectvalue=ncobj.childNodes[hlen].innerHTML;
            ncobj.childNodes[hlen].style.fontWeight = "bold";
        }
    }

    var nw=parseInt(ncobj.offsetHeight);//�����б�ĸ߶�

    var nqt=false;//�ж��������¼����������������ĵ���¼�����
    var np=0;
    var ntb=(parseInt(nw/2)-120*X);//�����ԭ���߽������ص�����ı߽�ľ��룬���ֵ�ǹ̶���
    var _ntb=0;
    hand.on("scrollCancel",function(){//����ʱ�������б������ĵ�
        n_init();
    });
    hand.on("scrollStart",function(){//�������»����ϲ���ʱ����Ҫ���ù�����ʶ�������б�����ã�������ֹͣʱ�������б������ĵ�
        nqt=false;
        ncobj.childNodes[hlen].style.fontWeight = "";
    });
    hand.on("scrollEnd",function(){
        //   alert(this.bc)
        if(!nqt)
        {
            nqt=true;//���ù���������ʶ
            var _v=hand.y;//���»����Ϲ���ʱ�����ص������룬ע�⣬�������Ӿ����������Ϲ�������ͬ�ľ��룬����iscroll��minutehand.y�������ǲ�ͬ��ģ�Ҳ���ڴ˿����жϳ���������
            _ntb=Math.abs(_v);//���Ի�_vֵҲ���ǹ�������󣬿���ֱ����tb�����жϣ�tb>_tb���������Ϲ�������֮��������
            var t=(Math.abs(_v)+150*X);//�þ���ľ���ֵ��һ�������ĸ߶ȣ��ɵó��������ĵ�Ĺ�������
            np=parseInt(t/(60*X));//�ù���������б�߶����������������ĵ㵱ǰ�����˶��ٸ��б�Ҳ����pֵ
            var nm=Math.abs(t%(60*X)*10+300);//����ֹͣ����Ҫ��λ�����ĵ���б������ĵ���һ����ƫ����mֵ���б����������ĵ�����Ҫ�ĺ�����
            hand.scrollToElement(ncobj.childNodes[np-bc],nm);//���������뵽���ĵ���б���Ϊp������ʵ�ϣ�iscroll�ڶ�λ���ĵ�ʱ��ֻ��Ҫ�������ĵ�p-2λ�õ��б�λ�ڱ߽��ϣ�����ȥ��������Ҫ���б���������ĵ��λ��
            //this.selectvalue=ncobj.chhlenildNodes[].innerHTML;

        }
        else
        {
            n_init();
        }
    });

}