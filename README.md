# Aplicativo de Tarefas - Backend com NodeJs e MongoDB

## Funcionalidades

- Uma API desenvolvida em Node e MongoDB que gerencia tarefas para o dia a dia.


## Stack utilizada

**Back-end:** Node, Express e MongoDB

## Documentação da API

#### Executando os métodos CRUD
##### Task

```http
  GET /task/filter/all
```
```http
  GET /task/filter/byid/{id}
```
```http
  GET /task/filter/late
```
```http
  GET /task/filter/today
```
```http
  GET /task/filter/week
```
```http
  GET /task/filter/month

```http
  GET /task/filter/year
```
```http
  POST /task
```
```http
  PUT /task/{id}
```
```http
  PUT /task/{id}/true
```
```http
  DELETE /task/{id}
```
