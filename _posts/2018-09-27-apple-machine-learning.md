---
layout: post
title: Introduction to Machine Learning
categories: [machine learning, vietnamese]
comments: true
---

Chào mọi người, đây là bài blog đầu tiên trong sự nghiệp viết lách của mình, hy vọng sẽ mang lại kiến thức cho mọi người.

Giới thiệu về mình một chút, mình tên là Sự, tại thời điểm viết bài này thì mình đã submit nghỉ việc ở công ty, nên mình đang rảnh rỗi (mình đang ngồi ở công ty để viết luôn 😎😎😎). Ý định viết blog cũng xuất hiện trong đầu rất là lâu rồi, bây giờ mới ngồi viết một cách nghiêm túc. Thôi tránh lan man, mình đi vào chủ đề chính nhé 😉

### Why this topic?

Mình tìm hiểu `Machine Learning` trong vòng 5 tháng trở lại đây, và để có cái gọi là `output` trong 5 tháng, thì mình và một anh cùng team research đã trình bày topic `Introduction to Machine Learning` trước công ty, người tham gia buổi chia sẻ của tụi mình gần 80 người. Sau khi trình bày xong, giờ mình chọn nó cho bài blog đầu tiên của mình. Và tất nhiên là sườn của bài blog sẽ giống trong slide 😈😈😈

Đây là poster mà phía công ty đã tạo ra cho tụi mình, và mình đứa ở phía trên:
![Poster]({{site.url}}/public/images/machine-learning/poster.png)

## Some interesting applications

Trước khi giới thiệu về `Machine Learning`, mình sẽ show cho mọi người một vài ứng dụng

Đầu tiên, ứng dụng `Face Recognition in ARKit`, đây là ứng dụng iOS nhận diện khuôn mặt một người, và cho biết người đó là ai.

<p align="center">
  <img src="{{site.url}}/public/images/machine-learning/face-recog-ar.gif">
</p>

Tiếp theo, ứng dụng `Chatbot - Speech Regnition`, một ứng dụng Web, nhận diện giọng nói sau đó xử lý để một `chatbot` reply.

![Chatbot - Speech Regnition]({{site.url}}/public/images/machine-learning/webspeech-api-demo.gif)

Cuối cùng là ứng dụng `nhận diện chữ viết tay` (cụ thể là con số), như mọi người đã viết, mỗi người sẽ có cách viết khác nhau, và ứng dụng này vẫn nhận diện được chữ số mà mình viết

<p align="center">
  <img src="{{site.url}}/public/images/machine-learning/handwriting.gif">
</p>

Phía trên là 3 ứng dụng mà mình muốn chia sẻ cho mọi người thấy, tất nhiên tất cả đều áp dụng `Machine Learning`. 

Vậy câu hỏi đặt ra là tại sao Machine Learning nó lại được nhắc đến nhiều như vậy tại thời điểm hiện tại, cũng như việc áp dụng Machine Learning vào các ứng dụng cũng không phải là ít 🤔🤔🤔 ??!!??

## Why is Machine Learning trending now?

Ở đây mình có 3 ý muốn chia sẻ tới mọi người.

Thứ nhất, việc `phần cứng - hardware` tại thời điểm hiện tại đã đủ đáp ứng cho Machine Learning. Theo một vài thông tin mà mình đã đọc, thì phần cứng đã hỗ trợ cho những ứng dụng Machine Learning làm các công việc chỉ tốn thời gian 1 ~ 2 tuần, trong khi nếu không có Machine Learning thì có thể mất tới 10 tháng.

Thứ hai, `dữ liệu - data` ngày nay có một số lượng rất là lớn, và tất nhiên nó chứa đựng một khối lượng tri thức cực kỳ lớn mà con người muốn khám phá, và công cụ để khám phá nó là gì? Chính là `Machine Learning`.

Cuối cùng, Machine Learning đã mang lại những ứng dụng thực tế hết sức hữu ích cũng như giải quyết ở nhiều lĩnh vực như: Sinh học, Tài chính, Xử lý ngôn ngữ tự nhiên, Hệ thống recommendation, Thị giác máy tính, xủ lý hình ảnh,...

## What is Machine Learning?

Nãy giờ đã nói quá nhiều về những lợi ích mà Machine Learning mang lại cũng như các ứng dụng của nó, giờ mình bắt đầu với câu hỏi kinh điển `Machine Learning là gì?`

Trước khi nói về định nghĩa của nó, mình quay trở lại một chút với `Programming`

![Programming]({{site.url}}/public/images/machine-learning/pr.png)

Như ở hình trên, mọi người có thể thấy được, đối với lập trình bình thường, khi bắt đầu định nghĩa một công việc nào đó, thì mình sẽ sử dụng những *luật lệ* hay *yêu cầu* cụ thể để định nghĩa, rồi sau đó, mình đưa `input (data)` vào, công việc đó sẽ đánh giá input dựa trên những `yêu cầu (rules)` và sẽ đưa ra cho mình `output (answer)`.

Nhưng khác với `Programming`, đối với `Machine Learning` thì sẽ có mô hình như sau:

![Machine Learning]({{site.url}}/public/images/machine-learning/ml.png)

Bài toán của `Machine Learning` lại khác, chúng ta sẽ không cần quan tâm `rules` sẽ là gì, khi bắt đầu định nghĩa một công việc của bài toán Machine Learning thì chúng ta chỉ cần cung cấp một lượng lớn các `answers` và `data`, để từ đó, Machine Learning sẽ học từ các answers để suy ra `rules`. Lúc này mình đưa vào `input` và công việc sẽ dự đoán `output`.

Để mọi người dễ hiểu hơn về `Programming` và `Machine Learning`, mình sẽ đưa ra một ví dụ cụ thể, bài toán của mình là:
> Đầu vào là một String, đầu ra là câu trả lời String đó có phải là email hay không (bài toán verify email).

Đối với `Programming`, để xử lý công việc này, mình sẽ define một function có chứa `rules` là: email phải có các kí tự chữ, số, gạch ngang, dấu chấm..., tiếp theo là kí tự `@`, cuối cùng là 1 `domain`. Lúc này, việc tiếp theo, chỉ cần truyền input là một String, nếu đúng như rules thì suy ra String đó là email.

Đối với `Machine Learning`, cái đầu tiên mình cần đó là `answers`. Ví dụ mình sẽ có answers:
- contact@mlsuho.me là email.
- hovansu.it@gmail.com là email.
- hovansu8@gmail.com là email.
- contact@ không phải là email.
- @mlsuho.me không phải là email.<br>
...

Lúc này mình sẽ cung cấp `answers`, việc của `Machine Learning` là lúc mình đưa vào một chuỗi String mới, nó phải dự đoán xem String đó có phải là email hay không. Công việc của developer như mình không cần phải định nghĩa `rules` nữa, đó là của `Machine Learning`

Một vài hình ảnh lấy từ các trang web:<br>
[Face Recognition in ARKit](https://github.com/NovaTecConsulting/FaceRecognition-in-ARKit)<br>
[Chatbot - Speech Regnition](https://www.smashingmagazine.com/2017/08/ai-chatbot-web-speech-api-node-js/)<br>
[Build a Handwritten](https://medium.com/@cafielo/build-a-handwritten-digit-recognition-model-with-keras-b8733274574c)