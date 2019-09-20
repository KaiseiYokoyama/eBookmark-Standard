# 通信規格

## 本の全件取得: /get/all
 - terminal to server
HTTP GET Request

 - server to terminal
```json
[
    {
        "title": "本のタイトル",
        "id": "対応するタグのID",
        "tags": [
            "タグ",
            "の",
            "一覧"
        ],
        "is_bookmark": ブックマークか否か(bool),
        "memo": "メモ",
    },...(配列)
]
```
## 本の1件取得 from ID : /get/one
 - terminal to server
```json
{
    "id": "取得するNFCのID",
}
```

 - server to terminal
```json
{
    "title": "本のタイトル",
    "id": "対応するタグのID",
    "tags": [
        "タグ",
        "の",
        "一覧"
    ],
    "is_bookmark": ブックマークか否か(bool),
    "memo": "メモ",
}
```

## 本の登録: /register
 - terminal to server
```json
{
    "id": "登録するNFCのID",
    "title": "book title",
}
```

- server to terminal
Http Status(Jsonによる応答なし)

## 本の削除: /delete
 - terminal to server
```json
{
    "id": "削除するNFCのID",
}
```

- server to terminal
Http Status(Jsonによる応答なし)

## 本の検索: /search
 - terminal to server
```json
{
    "title": "タイトル",
    "tags": [
        "タグ",
        "の",
        "一覧"
    ],
    "is_bookmark": ブックマークか否か(bool),
}
```
`title`, `tags`, `is_bookmark`どのフィールドも省略可能.

 - server to terminal
```json
[
    {
        "title": "本のタイトル",
        "id": "対応するタグのID",
        "tags": [
            "タグ",
            "の",
            "一覧"
        ],
        "is_bookmark": ブックマークか否か(bool),
        "memo": "メモ",
    },...(配列)
]
```

