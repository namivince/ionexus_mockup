# Login Page — IONEXUS

## Mục tiêu
Trang đăng nhập cho người dùng, cho phép truy cập vào các tính năng dành riêng cho thành viên đã đăng ký.

## Flow đăng nhập

### Trigger từ Landing Page
- **Nút Login**: Nằm ở góc phải trên cùng của navigation bar
  - Hiển thị: Nút màu trắng với viền xanh (#1A237E), text "Login" màu xanh
  - Hover state: Đổi background thành màu xanh nhạt, text vẫn giữ màu xanh đậm
  - Click action: Chuyển hướng đến trang login (/login)

## Layout trang Login

### Header
- **Logo IONEXUS**: Click để về trang chủ
- **Navigation Links**: Ẩn hoặc hiển thị tối giản

### Main Content
- **Container**: Card trung tâm với width 480px, padding 32px
- **Background**: Màu trắng (#FFFFFF) với shadow nhẹ
- **Border Radius**: 8px (theo design system)

### Form Elements

#### Tiêu đề
- **Heading**: "Log in to your account" (24px, font-weight: 600)
- **Subtitle**: "Welcome back! Please enter your details" (16px, color: gray-600)

#### Input Fields
1. **Email/Username**:
   - Label: "Email or username"
   - Placeholder: "Enter your email or username"
   - Validation: Hiển thị lỗi nếu trường bị bỏ trống
   - Focus state: Border màu primary (#1A237E)

2. **Password**:
   - Label: "Password"
   - Type: password (hiển thị dưới dạng dots)
   - Placeholder: "••••••••"
   - Show/Hide toggle: Icon con mắt ở bên phải
   - Validation: Hiển thị lỗi nếu trường bị bỏ trống
   - Focus state: Border màu primary (#1A237E)

#### Additional Options
- **Remember me**: Checkbox với label "Remember me"
- **Forgot password**: Link "Forgot password?" (align right)
  - Hover: Underline
  - Click: Chuyển đến trang reset password (/reset-password)

#### Login Button
- **Style**: Full width, background màu primary (#1A237E), text màu trắng
- **Height**: 48px
- **Border Radius**: 8px
- **Text**: "Log in"
- **Loading state**: Spinner khi đang xử lý
- **Hover**: Màu đậm hơn
- **Click**: Submit form

#### Role Selection
- **Role Bar**: Hiển thị các vai trò người dùng có thể chọn
  - Developer
  - Sale (Sales Operation & Sale)
  - Partner (Agency & Individual)
  - End-user / Investor
  - Admin (Super Admin)
- **Lưu ý về Admin**: Khi chọn vai trò Admin, người dùng cần nhập email superadmin@ionexus.com và mật khẩu để đăng nhập với quyền Super Admin.

#### Social Login
- **Divider**: "Or continue with" (text centered với line ở hai bên)
- **Google Button**: Icon Google + "Continue with Google"
  - Style: White background, gray border
  - Hover: Light gray background
- **Facebook Button**: Icon Facebook + "Continue with Facebook"
  - Style: White background, gray border
  - Hover: Light gray background

#### Sign Up Option
- **Text**: "Don't have an account?"
- **Link**: "Sign up" (màu primary #1A237E)
  - Hover: Underline
  - Click: Chuyển đến trang đăng ký (/signup)

## Validation & Error States

### Form Validation
- **Empty fields**: "This field is required"
- **Invalid email**: "Please enter a valid email address"
- **Invalid credentials**: "Invalid email/username or password"

### Success State
- **Redirect**: Sau khi đăng nhập thành công, chuyển hướng về trang trước đó hoặc dashboard
- **Toast notification**: "Logged in successfully" (hiển thị trong 3 giây)

## Responsive Design

### Desktop (>1024px)
- Form container: 480px width, centered
- Full layout như mô tả ở trên

### Tablet (768px - 1024px)
- Form container: 80% width, max-width 480px
- Giữ nguyên layout

### Mobile (<768px)
- Form container: 90% width
- Padding giảm xuống 24px
- Social login buttons: Stack vertically

## Wireframe
```
┌────────────────────────────┐
│       [IONEXUS Logo]       │
├────────────────────────────┤
│                            │
│   Log in to your account   │
│ Welcome back! Please enter │
│        your details        │
│                            │
│ Email or username          │
│ ┌──────────────────────┐   │
│ │                      │   │
│ └──────────────────────┘   │
│                            │
│ Password                   │
│ ┌──────────────────────┐   │
│ │ •••••••••••••        │👁️ │
│ └──────────────────────┘   │
│                            │
│ ☑ Remember me  Forgot pwd? │
│                            │
│ ┌──────────────────────┐   │
│ │        Log in        │   │
│ └──────────────────────┘   │
│                            │
│ ──────  Or continue with ──────
│                            │
│ ┌────────┐    ┌────────┐  │
│ │ Google │    │Facebook│  │
│ └────────┘    └────────┘  │
│                            │
│  Don't have an account?    │
│          Sign up           │
│                            │
└────────────────────────────┘
```

## Implementation Status

🔄 **In Progress:**
- Form validation logic
- API integration cho authentication
- Social login providers

⏳ **Planned Features:**
- Remember me functionality
- Password strength indicator
- Multi-factor authentication
- Login history tracking

## Technical Notes

### Authentication Flow
1. User nhập thông tin đăng nhập
2. Client-side validation
3. Submit credentials đến API endpoint
4. Server xác thực và trả về JWT token
5. Lưu token vào localStorage/cookies
6. Redirect user đến trang đích

### Security Considerations
- HTTPS cho tất cả API calls
- CSRF protection
- Rate limiting cho login attempts
- Password hashing (bcrypt)
- JWT expiration và refresh token flow

### State Management
- Login status được lưu trong global state
- User info được cache để tránh API calls không cần thiết
- Persist login state giữa các sessions nếu "Remember me" được chọn