# BOG Web
A Server side rendered React website running on Webpack.
Implemented:
- Server side rendering
- gzip
- Redux
- Redux Saga
- Sass
- File loader
- URL loader

# Notes
> Node version >= 10 is preferred

## How to install
`git clone https://github.com/seeseesky/bog_web.git`

`npm install`

## How to run the website for DEBUGGING
`npm run dev`

## How to build the website
`npm run build`

## How to build and run the website
`npm run start`

## Project structure
- /config: webpack config files
- /src: Code base
- /public: Save all static files such as image, font
- index.js: Server-side rendering node.js script

## UI Framework
[Ant Design]
[Ant Design]: https://ant.design/docs/react/introduce

## UI Design 
https://app.zeplin.io/project/5bc9d1bc33a8342f1cf41e77

## Roadmap

### Phase 0: Basic Architecture
- [x] Setup Webpack
- [x] Setup Redux
- [x] Setup Server Side Rendering (SSR)
- [x] Setup Redux Saga
- [x] SSR supports Saga
- [x] Serving static assets
- [x] gzip

### Phase 1: Create Components (Dumb) and Styling
- [x] Webfont @Simon
- [ ] ThemedButton (antd) @Alice
- [ ] Badge (antd) @Alice
- [x] Avatar (antd) @Simon
- [x] Progress Bar (antd) @Simon
- [x] Input (antd) @Simon
- [x] Dropdown (antd) @Simon
- [x] Datepicker (react-dates) @Simon
- [x] Home Banner @Gash
- [x] Photos Banner @Gash
- [x] Rating Stars (antd) @Simon
- [x] MapView @Gash
- [x] Popup (antd) @Simon
- [ ] Title & Sub Title @Alice
- [ ] ... More

### Phase 2: Create Smart Containers (Page)
- [x] Flow template @Simon
- [ ] Payment selector @Gash
- [ ] Nav bar (50%) @Simon
- [ ] Listing card @Gash
- [ ] Home page (50%, TODO: google place suggestion, part below banner) @Simon
- [ ] Register @Simon
- [ ] Login @Gash
- [ ] Search @Gash
- [ ] Detail @Simon
- [ ] Booking flow @Gash
- [ ] Listing flow @Simon
- [ ] User dashboard
- [ ] Sort filter
- [ ] Money filter
- [ ] More filter

### Phase 3: Bind with API

### Phase 4: MVP
