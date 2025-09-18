# Landing Page — IONEXUS

## Mục tiêu
Trang chủ công khai, tập trung vào tìm kiếm BĐS (giống Property Finder).

## Navigation
- Logo IONEXUS
- Navigation Links: Buy (active) | Rent | Commercial | New Projects | Find Agent
- User Nav:  Login (button)
- Active state: underline với màu primary

## Hero Section
- Background: Image overlay với màu primary (#1A237E)
- Title: "Find Your Dream Property"
- Subtitle: "Search properties for sale and to rent in the most desirable locations"

## Search Section
- Search card nổi lên trên hero với shadow
- Tabset: Buy | Rent | Commercial | New Projects (với border-bottom indicator)
- Input: "Enter location, community, or building"
- CTA: Search (button)
- Filter chips: Property Type | Price | Beds & Baths | Area (sqft) | More Filters

## Main Content
- Featured Properties (grid 3 cột)
  - 12 property cards với real data
  - Property badges: Featured (blue) | New (red) | Exclusive (green) | Off Plan (orange)
  - Property info: Price, Title, Location, Features (beds/baths/sqft)
  - Hover effects: translateY(-4px) + shadow

## Wireframe (Updated)
[Header Navigation]
[Hero Section với Background Image]
[Search Card (floating)]
[Featured Properties Grid]
[Footer]

## Color Palette (Updated)
- **Primary**: #1A237E (thay đổi từ #1D4F91)
- **Secondary**: #FF5252 (màu đỏ)
- **Background**: #FAFAFA (gray-50)
- **Text Primary**: #212121 (gray-900)
- **Text Secondary**: #757575 (gray-600)
- **Border Radius**: 8px (thay đổi từ 24px)

## Components Implemented
1. **Header**: Navigation links với active state
2. **HeroSearch**: Hero section + floating search card
3. **PropertyGrid**: Grid layout với 12 property cards
4. **Footer**: 4 cột với social links

## Technical Updates
- Theme updated với color palette mới
- Components redesigned theo HTML reference
- Simplified layout, loại bỏ Popular Searches, Featured Projects carousel, Explore by Area
- Focus vào core functionality: Search + Property Grid


## Sample Property Data
```json
{
  "properties": [
    {
      "id": 1,
      "title": "3 Bedroom Apartment in Dubai Marina",
      "location": "Dubai Marina, Dubai",
      "price": "AED 2,500,000",
      "image": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      "badge": "Featured",
      "beds": 3,
      "baths": 3,
      "sqft": "1,500"
    }
  ],
  "search": {
    "activeTab": "Buy",
    "query": "",
    "filters": ["Property Type", "Price", "Beds & Baths", "Area (sqft)", "More Filters"]
  }
}
```

## Implementation Status
✅ **Completed Components:**
- Header với navigation links
- Hero section với background image
- Search component với tabs và filters
- Property grid với 12 cards
- Footer với 4 cột

✅ **Design Updates:**
- Color palette updated theo HTML reference
- Border radius changed từ 24px → 8px
- Layout simplified, focus vào core features
- Hover effects và transitions implemented

## Next Steps (Future)
- Add routing cho các navigation links
- Implement search functionality
- Add property detail pages
- Add responsive design cho mobile
- Add loading states và error handling
