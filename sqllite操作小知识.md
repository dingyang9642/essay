1、sqlite批量插入：  <br/>
    insert into fieldsdef('field','tabname','fieldRealname','fieldtype','intro') SELECT 'V13','economic','sdsd','string','sdsds' UNION ALL select 'V14','economic','dsdsd','string','fdfd'  <br/>
2、依据其他表更新本表数据  <br/>
    update f_zhenjiedaomian1 set COUNTY=(select COUNTY from f_zhenjiedaomian where NAME=f_zhenjiedaomian.NAME)