
	function callemu() {
	
		snapshot_file = new Array(5)
		snapshot_TITLE= new Array(5)
		snapshot_file[1]="parabolic_polygon.Z80"
		snapshot_file[2]="parabolic_star.Z80"
		snapshot_file[3]="epicycloid.Z80"
		snapshot_file[4]="hypocycloid.Z80"
		snapshot_file[5]="circle_curves.Z80"
		snapshot_title[1]="Parabolic Polygon"
		snapshot_title[2]="Parabolic Star"
		snapshot_title[3]="Epicycloid"
		snapshot_title[4]="Hypocycloid"
		snapshot_title[5]="Circle Curves"

			rnd = new Date().getSeconds() & 4
			snapshot = rnd + 1
			
				document.clear()
				document.write("<tr>")
				document.write("<td align="+"center"+">")
				document.write("<applet name="+"qaop"+" ")
				document.write("code="+"Qaop"+" ")
				document.write("width="+320+" height="+256+" ")
				document.write("archive="+"fun_stuff/qaop.jar"+">")
				document.write("<param name="+"load"+" ")
				document.write("value="+"fun_stuff/line_designs")
				document.write("/"+snapshot_file[snapshot]+">")
				document.write("</applet>")
				document.write("</td>")
				document.write("</tr>")
				document.write("<tr>")
				document.write("<td>")
				document.write("&nbsp;")
				document.write("</td>")
				document.write("</tr>")
				document.write("<tr>")
				document.write("<td align="+"center"+">")
				document.write("<span>"+snapshot_title[snapshot]+"</span>")
				document.write("</td>")
				document.write("</tr>")

		}

		callemu()
