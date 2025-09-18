# Realtime Chat & Inquiry — IONEXUS Admin

## Mục tiêu
Cung cấp hệ thống chat và quản lý yêu cầu thông tin (inquiry) theo thời gian thực, giúp kết nối khách hàng với agents/sales và tăng tỷ lệ chuyển đổi.

## Tính năng chính

### 1. Quản lý Chat
- **Danh sách cuộc hội thoại**:
  - Tên khách hàng/người dùng
  - Tin nhắn gần nhất
  - Thời gian tin nhắn gần nhất
  - Trạng thái (đang hoạt động, chờ phản hồi, đã kết thúc)
  - Người phụ trách (agent/sales)
  - Số tin nhắn chưa đọc
- **Bộ lọc và tìm kiếm**:
  - Lọc theo trạng thái, agent/sales
  - Tìm kiếm theo tên khách hàng
- **Phân loại cuộc hội thoại**:
  - Theo dự án quan tâm
  - Theo loại bất động sản
  - Theo mức độ ưu tiên (cao, trung bình, thấp)
- **Phân công cuộc hội thoại**:
  - Gán cuộc hội thoại cho agent/sales
  - Tự động phân bổ cuộc hội thoại
  - Chuyển tiếp cuộc hội thoại

### 2. Giao diện Chat
- **Cửa sổ chat**:
  - Hiển thị lịch sử tin nhắn
  - Hiển thị thông tin người dùng
  - Hiển thị trạng thái người dùng (online, offline, đang nhập)
  - Hiển thị thời gian tin nhắn
  - Hiển thị trạng thái đã đọc/chưa đọc
- **Công cụ chat**:
  - Gửi tin nhắn văn bản
  - Gửi hình ảnh
  - Gửi tài liệu
  - Gửi vị trí
  - Gửi tin nhắn mẫu
  - Gửi link
- **Tin nhắn mẫu**:
  - Tạo tin nhắn mẫu
  - Sử dụng tin nhắn mẫu
  - Quản lý danh sách tin nhắn mẫu
- **Thông tin khách hàng**:
  - Hiển thị thông tin cơ bản
  - Hiển thị lịch sử tương tác
  - Hiển thị bất động sản đang quan tâm

### 3. Quản lý Inquiry
- **Danh sách inquiries**:
  - Mã inquiry
  - Tên khách hàng
  - Email
  - Số điện thoại
  - Bất động sản/dự án quan tâm
  - Ngày tạo
  - Trạng thái (mới, đang xử lý, đã liên hệ, đã giải quyết, đã hủy)
  - Người phụ trách (agent/sales)
- **Bộ lọc và tìm kiếm**:
  - Lọc theo trạng thái, dự án, thời gian
  - Tìm kiếm theo tên khách hàng, email, số điện thoại
- **Quy trình xử lý inquiry**:
  - Tiếp nhận inquiry
  - Phân công xử lý
  - Cập nhật trạng thái
  - Ghi nhận kết quả
- **Thông báo**:
  - Thông báo khi có inquiry mới
  - Thông báo khi inquiry được phân công
  - Thông báo khi inquiry cần được theo dõi

### 4. Chi tiết Inquiry
- **Thông tin cơ bản**:
  - Mã inquiry
  - Ngày tạo
  - Trạng thái
- **Thông tin khách hàng**:
  - Tên khách hàng
  - Email
  - Số điện thoại
  - Địa chỉ
- **Thông tin yêu cầu**:
  - Bất động sản/dự án quan tâm
  - Loại yêu cầu (thông tin, xem nhà, báo giá, v.v.)
  - Nội dung yêu cầu
  - Thời gian mong muốn liên hệ
- **Lịch sử xử lý**:
  - Các hoạt động đã thực hiện
  - Ghi chú
  - Kết quả liên hệ
- **Chuyển đổi inquiry**:
  - Chuyển inquiry thành lead
  - Chuyển inquiry thành booking
  - Liên kết inquiry với cuộc hội thoại chat

### 5. Chatbot và Tự động hóa
- **Chatbot**:
  - Tự động chào hỏi
  - Trả lời các câu hỏi thường gặp
  - Thu thập thông tin khách hàng
  - Chuyển tiếp cho agent/sales khi cần
- **Tự động phản hồi**:
  - Tự động trả lời ngoài giờ làm việc
  - Tự động gửi thông tin theo yêu cầu
  - Tự động hẹn lịch xem nhà
- **Tích hợp AI**:
  - Phân tích nội dung chat
  - Đề xuất câu trả lời
  - Đánh giá mức độ quan tâm của khách hàng
  - Dự đoán khả năng chuyển đổi

### 6. Báo cáo và Phân tích
- **Báo cáo chat**:
  - Số lượng cuộc hội thoại
  - Thời gian phản hồi trung bình
  - Thời gian xử lý trung bình
  - Tỷ lệ chuyển đổi từ chat
- **Báo cáo inquiry**:
  - Số lượng inquiries mới
  - Thời gian phản hồi trung bình
  - Tỷ lệ chuyển đổi từ inquiry
  - Phân bổ inquiry theo nguồn
- **Phân tích hiệu suất**:
  - Hiệu suất của agent/sales
  - Hiệu quả của chatbot
  - Thời điểm cao điểm của chat/inquiry
  - Các câu hỏi thường gặp

## Wireframe

### Danh sách cuộc hội thoại
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Conversations                                                           │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│ │ Search  │ │ Status ▼    │ │ Agent ▼     │ │ Project ▼              │ │
│ └─────────┘ └─────────────┘ └─────────────┘ └─────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────┬─────────────────────────────────────────┐   │
│ │                         │                                         │   │
│ │ Conversations           │ Chat - John Doe                         │   │
│ │                         │                                         │   │
│ │ ┌─────────────────────┐ │ ┌─────────────────────────────────────┐ │   │
│ │ │ John Doe        ●   │ │ │ John Doe                           │ │   │
│ │ │ Hi, I'm interested   │ │ │ Online                             │ │   │
│ │ │ in Palm Heights...   │ │ └─────────────────────────────────────┘ │   │
│ │ │ 2 mins ago           │ │                                         │   │
│ │ └─────────────────────┘ │ │ John: Hi, I'm interested in Palm      │ │   │
│ │                         │ │ Heights project. Can you tell me more  │ │   │
│ │ ┌─────────────────────┐ │ │ about the available units?            │ │   │
│ │ │ Jane Smith          │ │ │ 2 mins ago                            │ │   │
│ │ │ What's the price     │ │ │                                       │ │   │
│ │ │ range for 2BR units? │ │ │ You: Thank you for your interest in   │ │   │
│ │ │ 15 mins ago          │ │ │ Palm Heights. We have several 2BR and │ │   │
│ │ └─────────────────────┘ │ │ 3BR units available. Would you like me │ │   │
│ │                         │ │ to send you the details?               │ │   │
│ │ ┌─────────────────────┐ │ │ Just now                               │ │   │
│ │ │ Bob Johnson         │ │ │                                       │ │   │
│ │ │ Thanks for the info  │ │ │ John is typing...                    │ │   │
│ │ │ I'll get back to you │ │ │                                       │ │   │
│ │ │ 1 hour ago           │ │ └───────────────────────────────────────┘ │   │
│ │ └─────────────────────┘ │ │                                         │   │
│ │                         │ │ ┌───────────────────────────────────────┐ │   │
│ │ ┌─────────────────────┐ │ │ │                                     │ │   │
│ │ │ Alice Brown         │ │ │ │                                     │ │   │
│ │ │ When can I schedule  │ │ │ │                                     │ │   │
│ │ │ a viewing?           │ │ │ │                                     │ │   │
│ │ │ 1 day ago            │ │ │ │                                     │ │   │
│ │ └─────────────────────┘ │ │ │                                     │ │   │
│ │                         │ │ └───────────────────────────────────────┘ │   │
│ │ Show more...            │ │                                         │   │
│ │                         │ │ ┌───────────────────────────────────────┐ │   │
│ └─────────────────────────┘ │ │ Type a message...            [Send] │ │   │
│                             │ └───────────────────────────────────────┘ │   │
└─────────────────────────────────────────────────────────────────────────┘
```

### Thông tin khách hàng trong chat
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Chat - John Doe                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────┬─────────────────────────────────────────┐   │
│ │                         │                                         │   │
│ │ Chat                    │ Customer Information                    │   │
│ │                         │                                         │   │
│ │ ┌─────────────────────┐ │ ┌─────────────────────────────────────┐ │   │
│ │ │                     │ │ │ John Doe                           │ │   │
│ │ │ John: Hi, I'm       │ │ │ john.doe@email.com                 │ │   │
│ │ │ interested in Palm  │ │ │ +1234567890                        │ │   │
│ │ │ Heights project...  │ │ └─────────────────────────────────────┘ │   │
│ │ │                     │ │                                         │   │
│ │ │ You: Thank you for  │ │ Interested In:                          │   │
│ │ │ your interest in    │ │ - Palm Heights (2BR Units)              │   │
│ │ │ Palm Heights...     │ │                                         │   │
│ │ │                     │ │ Previous Interactions:                   │   │
│ │ │ John: What's the    │ │ - Website visit: Palm Heights page      │   │
│ │ │ price range for     │ │ - Inquiry: Requested floor plans        │   │
│ │ │ 2BR units?          │ │ - Email: Received project brochure      │   │
│ │ │                     │ │                                         │   │
│ │ │ You: The 2BR units  │ │ Notes:                                  │   │
│ │ │ range from $320,000 │ │ - Looking for investment property       │   │
│ │ │ to $380,000...      │ │ - Budget: $300,000 - $400,000           │   │
│ │ │                     │ │ - Prefers high floor units              │   │
│ │ └─────────────────────┘ │ │                                         │   │
│ │                         │ │ Actions:                                │   │
│ │ ┌─────────────────────┐ │ │ [Convert to Lead] [Schedule Meeting]   │   │
│ │ │ Type a message...   │ │ │ [Send Property Info] [Add Note]        │   │
│ │ └─────────────────────┘ │ │                                         │   │
│ │                         │ │ Suggested Responses:                    │   │
│ │ Quick Responses:        │ │ - "Would you like to schedule a        │   │
│ │ [Pricing Info]          │ │   viewing of the property?"            │   │
│ │ [Floor Plans]           │ │ - "I can send you the detailed floor   │   │
│ │ [Schedule Viewing]      │ │   plans for the 2BR units."            │   │
│ │ [Contact Information]   │ │ - "What specific features are you      │   │
│ │                         │ │   looking for in a property?"          │   │
│ └─────────────────────────┘ └─────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────┘
```

### Danh sách Inquiries
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Inquiries                                                               │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│ │ Search  │ │ Status ▼    │ │ Project ▼   │ │ Date Range ▼           │ │
│ └─────────┘ └─────────────┘ └─────────────┘ └─────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ ID      │ Customer    │ Project     │ Date       │ Status        │ │
│ ├─────────┼─────────────┼────────────┼────────────┼──────────────┤ │
│ │ INQ-001 │ Tom Wilson  │ Palm Heights│ Today      │ New           │ │
│ ├─────────┼─────────────┼────────────┼────────────┼──────────────┤ │
│ │ INQ-002 │ Sarah Lee   │ Sky Garden  │ Yesterday  │ In Progress   │ │
│ ├─────────┼─────────────┼────────────┼────────────┼──────────────┤ │
│ │ INQ-003 │ Mike Brown  │ River View  │ 2 days ago │ Contacted     │ │
│ ├─────────┼─────────────┼────────────┼────────────┼──────────────┤ │
│ │ INQ-004 │ Lisa Johnson│ Sun Tower   │ 1 week ago │ Resolved      │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ Showing 1-4 of 56 inquiries                    [1] [2] [3] ... [14] >  │
└─────────────────────────────────────────────────────────────────────────┘
```

### Chi tiết Inquiry
```
┌─────────────────────────────────────────────────────────────────────────┐
│ < Back to Inquiries                   [Update Status] [Assign] [Convert]│
├─────────────────────────────────────────────────────────────────────────┤
│ Inquiry #INQ-001                                                        │
│                                                                         │
│ ┌───────────┬───────────┬───────────┬───────────┬───────────┐           │
│ │ Details   │ Customer  │ Activity  │ Notes     │ Related   │           │
│ └───────────┴───────────┴───────────┴───────────┴───────────┘           │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Inquiry Information                                                │ │
│ │                                                                     │ │
│ │ Status: New                                                         │ │
│ │ Created: Today at 10:30 AM                                          │ │
│ │ Source: Website Contact Form                                        │ │
│ │ Assigned To: Not assigned                                           │ │
│ │                                                                     │ │
│ │ Project: Palm Heights                                               │ │
│ │ Type: Information Request                                           │ │
│ │                                                                     │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────┐  ┌─────────────────────────────────────┐    │
│ │                         │  │ Customer Details                    │    │
│ │                         │  │ ┌───────────────┬─────────────────┐ │    │
│ │                         │  │ │ Name          │ Tom Wilson      │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │                         │  │ │ Email         │ tom@email.com   │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │                         │  │ │ Phone         │ +1234567890     │ │    │
│ │                         │  │ ├───────────────┼─────────────────┤ │    │
│ │                         │  │ │ Best Time     │ Evenings        │ │    │
│ │                         │  │ └───────────────┴─────────────────┘ │    │
│ └─────────────────────────┘  └─────────────────────────────────────┘    │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────┐     │
│ │ Message                                                         │     │
│ │                                                                 │     │
│ │ I'm interested in learning more about the 2-bedroom units in    │     │
│ │ Palm Heights. Could you please send me information about        │     │
│ │ availability, pricing, and floor plans? I'm also interested     │     │
│ │ in scheduling a viewing next week if possible.                  │     │
│ │                                                                 │     │
│ │ Thank you,                                                      │     │
│ │ Tom                                                             │     │
│ └─────────────────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────────────┘
```

### Báo cáo Chat & Inquiry
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Chat & Inquiry Analytics                        [Export] [Print] [Share]│
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐             │
│ │                 │ │                 │ │                 │             │
│ │  Chat Sessions  │ │  Response Time  │ │ Conversion Rate │             │
│ │      128        │ │    2.5 mins     │ │     18.5%       │             │
│ │   ▲ 22% WoW     │ │   ▼ 15% WoW     │ │   ▲ 3.2% WoW    │             │
│ │                 │ │                 │ │                 │             │
│ └─────────────────┘ └─────────────────┘ └─────────────────┘             │
│                                                                         │
│ ┌─────────────────────────────┐       ┌─────────────────────────────┐   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ │     Chat Volume by Hour     │       │   Inquiry Source Breakdown  │   │
│ │     (Line Chart)            │       │   (Pie Chart)               │   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ │                             │       │                             │   │
│ └─────────────────────────────┘       └─────────────────────────────┘   │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Top Performing Agents                                              │ │
│ │                                                                     │ │
│ │ Agent       │ Chats │ Avg Response │ Inquiries │ Conversion Rate  │ │
│ ├────────────┼───────┼─────────────┼───────────┼────────────────┤ │
│ │ David Agent │ 45    │ 1.8 mins     │ 28        │ 22.5%          │ │
│ ├────────────┼───────┼─────────────┼───────────┼────────────────┤ │
│ │ Sarah Agent │ 38    │ 2.2 mins     │ 32        │ 21.2%          │ │
│ ├────────────┼───────┼─────────────┼───────────┼────────────────┤ │
│ │ Mike Agent  │ 42    │ 2.5 mins     │ 25        │ 18.7%          │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

## Responsive Design

### Desktop (>1200px)
- Layout 2 cột cho giao diện chat (danh sách hội thoại + cửa sổ chat)
- Layout 3 cột cho chi tiết chat (danh sách hội thoại + cửa sổ chat + thông tin khách hàng)
- Hiển thị đầy đủ bảng dữ liệu cho inquiries

### Tablet (768px - 1199px)
- Layout 1 cột cho giao diện chat với tab để chuyển đổi giữa danh sách và cửa sổ chat
- Layout 2 cột cho chi tiết chat (cửa sổ chat + thông tin khách hàng)
- Thu gọn bảng dữ liệu, ẩn một số cột ít quan trọng

### Mobile (<768px)
- Layout 1 cột cho tất cả các phần
- Sử dụng navigation drawer để chuyển đổi giữa danh sách hội thoại và cửa sổ chat
- Hiển thị thông tin khách hàng trong modal hoặc drawer
- Hiển thị dạng card thay vì bảng cho inquiries

## Quyền truy cập
- **Super Admin**: Toàn quyền quản lý chat và inquiries
- **Sales Manager**: Quyền xem tất cả chat và inquiries, phân công xử lý
- **Sales/Agent**: Quyền xem và xử lý chat và inquiries được phân công
- **Customer Support**: Quyền xử lý chat và inquiries chung

## API Endpoints

### Chat
- `GET /api/chats` - Lấy danh sách cuộc hội thoại
- `GET /api/chats/:id` - Lấy chi tiết cuộc hội thoại
- `GET /api/chats/:id/messages` - Lấy tin nhắn của cuộc hội thoại
- `POST /api/chats/:id/messages` - Gửi tin nhắn mới
- `PUT /api/chats/:id/assign` - Phân công cuộc hội thoại
- `PUT /api/chats/:id/status` - Cập nhật trạng thái cuộc hội thoại

### Inquiries
- `GET /api/inquiries` - Lấy danh sách inquiries
- `GET /api/inquiries/:id` - Lấy chi tiết inquiry
- `POST /api/inquiries` - Tạo inquiry mới
- `PUT /api/inquiries/:id` - Cập nhật inquiry
- `PUT /api/inquiries/:id/assign` - Phân công inquiry
- `PUT /api/inquiries/:id/status` - Cập nhật trạng thái inquiry
- `POST /api/inquiries/:id/convert` - Chuyển đổi inquiry thành lead

### Templates
- `GET /api/templates/messages` - Lấy danh sách tin nhắn mẫu
- `POST /api/templates/messages` - Tạo tin nhắn mẫu mới
- `PUT /api/templates/messages/:id` - Cập nhật tin nhắn mẫu
- `DELETE /api/templates/messages/:id` - Xóa tin nhắn mẫu

### Analytics
- `GET /api/analytics/chats` - Lấy thống kê về chat
- `GET /api/analytics/inquiries` - Lấy thống kê về inquiries
- `GET /api/analytics/agents` - Lấy thống kê về hiệu suất của agents
