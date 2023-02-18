
// lab_1View.h: интерфейс класса Clab1View
//

#pragma once


class Clab1View : public CView
{
protected: // создать только из сериализации
	Clab1View() noexcept;
	DECLARE_DYNCREATE(Clab1View)

// Атрибуты
public:
	Clab1Doc* GetDocument() const;

// Операции
public:

// Переопределение
public:
	virtual void OnDraw(CDC* pDC);  // переопределено для отрисовки этого представления
	virtual BOOL PreCreateWindow(CREATESTRUCT& cs);
protected:
	virtual BOOL OnPreparePrinting(CPrintInfo* pInfo);
	virtual void OnBeginPrinting(CDC* pDC, CPrintInfo* pInfo);
	virtual void OnEndPrinting(CDC* pDC, CPrintInfo* pInfo);

// Реализация
public:
	virtual ~Clab1View();
#ifdef _DEBUG
	virtual void AssertValid() const;
	virtual void Dump(CDumpContext& dc) const;
#endif

protected:

// Созданные функции схемы сообщений
protected:
	DECLARE_MESSAGE_MAP()
};

#ifndef _DEBUG  // версия отладки в lab_1View.cpp
inline Clab1Doc* Clab1View::GetDocument() const
   { return reinterpret_cast<Clab1Doc*>(m_pDocument); }
#endif

