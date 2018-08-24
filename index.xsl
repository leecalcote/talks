<?xml version="1.0" encoding="UTF-8"?>
<html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <head>
	  <title>Lee Calcote's Talks</title>
   </head>
   <body>
   <xsl:for-each select="talks/talk">
    <b>
      <xsl:value-of select="event_name"/>
    </b>
   </xsl:for-each>
     <div>
       <h3><a href="http://blog.gingergeek.com/speaking">Talks</a></h3>
  
      </div>
   </body>
</html>
