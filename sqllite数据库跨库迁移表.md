需求：<br/>
　　有两个不同的SQLite数据库 A、B，需要将B数据库中的表复制到A数据库中去。<br/>
解决办法：<br/>
　　（1）使用软件：SQLite Expert Personal 3；<br/>
　　（2）操作步骤：<br/>
　　　　a) 在软件SQLite Expert Personal 3中打开 A、B数据库；<br/>
　　　　b) 选择A数据库，点击鼠标右键，找到“Attach Database”选项，选择该项执行；<br/>
　　　　c) 在弹出的“文件选择”界面中，选择B数据库文件，点击“确认”按钮；<br/>
　　　　d) 在弹出的对话框中，先确认选择的数据库文件是否正确。如果正确，点击“OK”按钮；<br/>
     （3）执行sql语句：<br/>
        insert into A.表1 select * from B.表1<br/>
注：前提是事先创建好具有相同格式的表，其他数据库方法类似（mysql oracle等）<br/>