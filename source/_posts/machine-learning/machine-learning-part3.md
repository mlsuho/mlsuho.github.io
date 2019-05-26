---
title: Introduction to Machine Learning - Part 3
date: 2018-12-16 09:00:00
thumbnail: /gallery/thumbnails/machine-learning-part3.png
toc: true
tags:
- machine-learning
- tech
categories:
- Machine Learning
---

Sau khoảng thời gian ôn luyện tiếng anh để thi IELTS, giờ mình quay lại để viết những gì còn dang dở 🤣🤣🤣. Cũng hơn 2 tháng mới viết lại một bài, hiệu suất quá kém, mình sẽ cố gắng để viết nhiều hơn về technical hay những chia sẻ khác.

>
> [Introduction to Machine Learing - Part 1]
> [Introduction to Machine Learing - Part 2]

Ở phần 3 này mình sẽ giới thiệu các *loại học* có trong Machine Learning. Trong `Machine Learning`, có rất nhiều cách để giải quyết một bài toán, và dựa vào những dữ liệu đầu vào cũng nhưng yêu cầu của bài toán, người ta đã định nghĩa ra những loại học trong Machine Learning. Hôm nay mình sẽ giới thiệu 2 loại chính là: Supervised Learning và Unsupervised Learning (ngoài ra còn có các loại khác, bài mình sẽ không đề cập nhé, vì kiến thức của mình cũng còn hạn chế).

<!-- more -->

Và để việc chia ra các loại này, người ta đều dựa vào `data - dữ liệu` để có thể phân loại bài toán cần thiết.

<p align='center'>
  <img src="/gallery/machine-learning/Image13.jpeg" alt="Categories of Machine Learning" width="80%">
</p>

Mình sẽ bắt đầu với `Supervised Learning` nhé.

### Supervised Learning

Mình tạm dịch `Supervised Learning`(SL) sang tiếng việt là `Học có giám sát`. Như mình đã đề cập ở [Part 2], bài toán Machine Learning là bài toán mình đưa dữ liệu vào rồi áp dụng các thuật toán để có `model`. Vậy tại sao lại dùng từ `giám sát`, với một bài toán áp dụng các học `SL` thì dữ liệu chúng ta cung cấp là chúng ta đã biết dữ liệu đầu vào và đầu ra. Do đó chúng ta có thể "giám sát" dữ liệu.

Để biết rõ hơn về `Supervised Learning`, về dữ liệu biết đầu vào và đầu ra, mình sẽ đề cập về 2 kĩ thuật chính của cách học này đó là: Classification và Regression.

#### Classification

Đầu tiên mình sẽ nói tới `Classification` (phân loại) trong Supervised Learning. Đây là một trong những kĩ thuật tìm hiểu và nghiên cứu nhiều nhất trong Machine Learning. Sau khi áp dụng kĩ thuật này, `model` sẽ có khả năng dự đoán các giá trị theo kiểu phân loại.

Mình sẽ có những ví dụ để mọi người dễ hiểu, những ứng dụng như phân loại chó mèo khi mình cung cấp một hình ảnh về chó hoặc mèo, hay ứng dụng phân biệt loài hoa hồng hay hoa lan, ngoài ra các ứng dụng nhận diện mặt hay đối tượng... các ứng dụng đó đều là các ví dụ sử dụng `Classification`.

Để rõ hơn, mình sẽ phân tích một bài toán cụ thể nhé

**Dự đoán giới tính dựa trên chiều cao và cân nặng**

Và dữ liệu của bài toán

![Data of Example]

Giờ bắt đầu phân tích một chút nhé, với bài toán này, theo yêu cầu, thì đầu vào của chúng ta sẽ là `chiều cao` và `cân nặng` còn đầu ra sẽ là `giới tính`.


Tiếp theo khi nhìn vào tập dữ liệu để train, thì chúng ta đã có đầy đủ input và output. Vậy ở đây `loại học` mình sẽ áp dụng là `Supervised Learning`.

Sau đó nhìn vào `output` mình sẽ thấy giới tính ở đây chỉ có `Nam` hoặc `Nữ`, đây là phân loại giới tính, nên kĩ thuật mình dùng sẽ là `Classification`.

Sau khi có bài toán và dữ liệu thì chúng ta có thể phân tích được kĩ thuật mà mình sử dụng sẽ là gì.

Khi nhắc tới `Machine Learning` thì mình không thể nhắc tới thuật toán của mỗi kĩ thuật.

Với Classification, mình xin giới thiệu tới mọi người một vài thuật toán, nếu mọi người thích thì có thể tìm hiểu để áp dụng vào bài toán của mình

Các thuật toán:
- Support vector machine (SVM)
- Decision tree
- K-nearest neighbor
- Naïve Bayes
- Neural networks

#### Regression

Một kĩ thuật thứ hai trong `Supervised Learning` là `Regression` (Hồi Quy). Khác với `Classification` kĩ thuật này áp dụng cho những bài toán có model dự đoán những giá trị thực (những con số). Mình sẽ đề cập chi tiết ở ví dụ để mọi người hiểu rõ hơn.

Những ứng dụng có sử dụng kĩ thuật này: Dự đoán tuổi dựa trên hình ảnh, hay ứng dụng dự đoán nhiệt độ của ngày mai.

Để mọi người hiểu rõ hơn thì mình sẽ có ví dụ như thế này

**Dự đoán cân nặng dựa trên chiều cao**

![Data of Classification Example]

Ta sẽ phân tích bài toán và dữ liệu train để chọn kĩ thuật nhé.

Đầu tiên, bài toán này với input là `chiều cao` và output là `cân nặng`. Dựa vào dữ liệu train, ta đều thấy input và output của dữ liệu, nên chúng ta sẽ áp dụng cách học `Supervised Learning`. Tiếp theo để ý output của dữ liệu, không giống ở ví dụ của phần `Classifiation`, output là giới tính `Nam` hoặc `Nữ`, ở ví dụ này, output là một `con số`, và mình không biết trước cụ thể về output. Khi gặp bài toán và dữ liệu này, mình sẽ áp dụng kĩ thuật `Regression`

Và các thuật toán trong Regression là:
- Linear / Nonlinear model
- Regularization
- Stepwise regression
- Bagged decision trees
- Neural networks

### Unsupervised Learning

Tiếp theo chúng ta sẽ qua loại học thứ hai là Học không giám sát - Unsupervised Learning. Về phần này thì mình chưa làm + chưa có kinh nghiệm nên chỉ có thể chia sẻ kiến thức lý thuyết mà mình hiểu được về nó, rồi chia sẻ cho mọi người cùng biết.

Đầu tiên, `Unsupervised Learning` ngược lại với Supervised Learning, nó không hướng tới việc tìm một `correct output`. Vậy `model` khi sử dụng `Unsupervised Learning` thì đưa ra output gì? Model này hướng tới việc tìm ra các structure, relationshiprelationship ẩn sâu trong dữ liệu mà ta không thấy được.

Và một điều đặt biết của tập dữ liệu train sẽ không có đầu ra, mình chỉ cung cấp dữ liệu có đầu vào.

Và kĩ thuật thường được sử dụng trong Unsupervised Learning là `Clustering` (Phân cụm).

Ví dụ một chút nhé, mình đang bán một mặt hàng, như `cây bút` và khách hàng của mình là khác nhau, từ học sinh, sinh viên hay doanh nhân. Sau khi mua hàng của mình, mình sẽ có dữ liệu của khách hàng. Sau đó mình áp dụng `Unsupervised Learning` vào dữ liệu của mình, có thể mình sẽ tìm ra điểm chung của khách hàng của mình, rồi từ điểm chung đó, mình sẽ quảng cáo tới những người khác dựa vào điểm chung đó, vừa nâng cao lợi nhuận vừa tiết kiếm chi phí quảng cáo.

#### Clustering

Tiếp theo mình sẽ nói về kĩ thuật `Clustering` (Phân cụm) trong Unsupervised Learning.

Kĩ thuật này dùng để phân nhóm toàn bộ dữ liệu thành các nhóm nhỏ khác nhau dựa vào sự liên quan về tính chất các dữ liệu về các nhóm

Mình sẽ có hình ảnh ví dụ về ứng dụng nhận dạng số

![Cluster Example]

Nguồn [datascienceplus]

Ở đây, đầu vào dữ liệu là mình cung cấp các số mà mình không cho biết đó là số nào, thông qua kĩ thuật Cluster, nó sẽ tự phân loại gần như chính xác các số đó dựa trên các nét vẽ của các chữ số đó. (có thể sẽ có một sai số như hình phía trên)

Mình sẽ chia sẻ thêm một vài thuật toán của kĩ thuật Clustering:
- K-means and k-medoids
- Hierarchical clustering
- Gaussian mixture models
- Hidden Markov models
- Fuzzy c-means clustering

Tới đây là mình đã kết thúc phần 3 cũng như chuỗi bài về `Introduction to Machine Learning`. Cảm ơn mọi người đã theo dõi. Có gì thắc mắc hoặc bài viết mình sai xót, mọi người cứ bình luận.

[Introduction to Machine Learing - Part 1]: /Machine-Learning/introduction-to-machine-learning-part-1/
[Introduction to Machine Learing - Part 2]: /Machine-Learning/introduction-to-machine-learning-part-2/
[Part 2]: /Machine-Learning/introduction-to-machine-learning-part-2/
[Data of Example]: /gallery/machine-learning/Image14.jpeg
[Data of Classification Example]: /gallery/machine-learning/Image15.jpeg
[Cluster Example]: /gallery/machine-learning/Image16.png
[datascienceplus]: https://datascienceplus.com/multi-dimensional-reduction-and-visualisation-with-t-sne/