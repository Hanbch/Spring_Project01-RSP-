<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<title>RockscissorPaper Project</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/reset.css">
<link rel="stylesheet" href="/css/style.css">

<script src="/js/main.js" charset="UTF-8"></script>
</head>
<body>
    <div class="wrapper">
        <div class="wrapper_inner">
            <div class="show_result">
                <div class="left">
                    <div class="tit">You</div>
                    <img src="/img/default.png" alt="default_img" id="you">
                </div>
                <div class="vs">vs</div>
                <div class="right">
                    <div class="tit">Computer</div>
                    <img src="/img/default.png" alt="default_img">
                </div>
            </div>
            <div class="select_zone">
               	<form action="/result_page" method="POST" enctype="/home">
               		<input class="rsp_input" type="radio" name="rsp" id="rock" value="0">
					<label class="label_img " for="rock">
					    <img src="/img/rock_icon.png" alt="rock_img">
					</label>
					<input class="rsp_input" type="radio" name="rsp" id="scissor" value="1">
					<label class="label_img " for="scissor">
						   <img src="/img/scissor_icon.png" alt="scissor_img">
					</label>
					
					<input class="rsp_input" type="radio" name="rsp" id="paper" value="2">
					<label class="label_img " for="paper">
						<img src="/img/paper_icon.png" alt="paper_img">
					</label>
					 <button type="submit" class="select_btn">º±≈√</button>
               	</form>
            </div>
        </div>

    </div>
</body>
</html>