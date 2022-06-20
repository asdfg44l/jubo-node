# Jubo Patients Server (Jubo Node)
提供 API去對 Doctor's Order 做 CRUD，以及取得 Patient List

## 功能列表
- 取得 Patient List
- Order List 有基本的新增、編輯和刪除(多筆) API

## 建構方法
這裡是使用 Node.js + Express來完成本次功能，並使用 MongoDB作為資料庫進行資料儲存。
簡單的利用 mongoose去執行資料庫操作以及用 Router去做 API的管理。

MongoDB是部屬於 MongoDB Atlas
API Server則是部屬於 Heroku

## 環境建置與需求 (prerequisites)
#### 環境
- Node.js 14.17.6

## 安裝與執行 (installation and execution)
1. 使用 git 下載本專案
```
git clone https://github.com/asdfg44l/jubo-node.git
```
2. 移動至本專案資料夾
```
cd jubo-node
```
3. 安裝套件
```
npm install