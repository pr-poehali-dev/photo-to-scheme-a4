const Index = () => {
  return (
    <div className="min-h-screen bg-white p-8 print:p-4 flex items-center justify-center">
      <div className="w-[210mm] max-w-full mx-auto bg-white">
        {/* Заголовок */}
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold text-[#2C5F7C] mb-2">
            Схема сбора и транспортировки хранения опасных<br />медицинских отходов
          </h1>
          <h2 className="text-base font-semibold text-gray-700 mt-4">
            Отделения хирургического профиля
          </h2>
        </div>

        {/* Схема */}
        <div className="relative">
          {/* Верхний уровень - три отделения */}
          <div className="flex justify-between mb-12 relative">
            <div className="w-[30%] text-center">
              <div className="border-2 border-[#2C5F7C] bg-[#F0F7FA] p-4 rounded-md min-h-[80px] flex items-center justify-center">
                <p className="text-sm font-medium text-gray-800">Процедурный кабинет</p>
              </div>
              <div className="h-16 w-0.5 bg-[#2C5F7C] mx-auto"></div>
            </div>

            <div className="w-[30%] text-center">
              <div className="border-2 border-[#2C5F7C] bg-[#F0F7FA] p-4 rounded-md min-h-[80px] flex items-center justify-center">
                <p className="text-sm font-medium text-gray-800">Перевязочный кабинет</p>
              </div>
              <div className="h-16 w-0.5 bg-[#2C5F7C] mx-auto"></div>
            </div>

            <div className="w-[30%] text-center">
              <div className="border-2 border-[#2C5F7C] bg-[#F0F7FA] p-4 rounded-md min-h-[80px] flex items-center justify-center">
                <p className="text-sm font-medium text-gray-800">Операционный блок</p>
              </div>
              <div className="h-16 w-0.5 bg-[#2C5F7C] mx-auto"></div>
            </div>
          </div>

          {/* Второй уровень - типы отходов */}
          <div className="flex justify-between mb-12 relative">
            <div className="w-[30%] text-center">
              <div className="border-2 border-[#2C5F7C] bg-white p-3 rounded-md">
                <p className="text-sm text-gray-800">Полимерные</p>
              </div>
            </div>

            <div className="w-[30%] text-center">
              <div className="border-2 border-[#2C5F7C] bg-white p-3 rounded-md mb-2">
                <p className="text-sm text-gray-800">Металлические</p>
              </div>
              <div className="border-2 border-[#2C5F7C] bg-white p-3 rounded-md">
                <p className="text-sm text-gray-800">Резиновые изделия</p>
              </div>
            </div>

            <div className="w-[30%] text-center">
              <div className="border-2 border-[#2C5F7C] bg-white p-3 rounded-md mb-2">
                <p className="text-sm text-gray-800">Перевязочный материал</p>
              </div>
              <div className="border-2 border-[#2C5F7C] bg-white p-3 rounded-md">
                <p className="text-sm text-gray-800">Одноразовое белье</p>
              </div>
            </div>
          </div>

          {/* Стрелки к первому контейнеру */}
          <div className="flex justify-between mb-4 relative">
            <div className="w-[30%] flex justify-center">
              <div className="h-12 w-0.5 bg-[#2C5F7C]"></div>
            </div>
            <div className="w-[30%] flex justify-center">
              <div className="h-12 w-0.5 bg-[#2C5F7C]"></div>
            </div>
            <div className="w-[30%] flex justify-center">
              <div className="h-12 w-0.5 bg-[#2C5F7C]"></div>
            </div>
          </div>

          {/* Первый контейнер */}
          <div className="mb-8">
            <div className="border-2 border-[#2C5F7C] bg-[#E8F4F8] p-4 rounded-md mx-auto max-w-[80%]">
              <p className="text-sm text-center font-medium text-gray-800">
                сбрасывается в одноразовый контейнер с дезинфекцией<br />Авансепт 2%
              </p>
            </div>
            <div className="h-12 w-0.5 bg-[#2C5F7C] mx-auto"></div>
          </div>

          {/* Второй контейнер */}
          <div className="mb-8">
            <div className="border-2 border-[#2C5F7C] bg-[#E8F4F8] p-4 rounded-md mx-auto max-w-[80%]">
              <p className="text-sm text-center font-medium text-gray-800">
                сбрасывается в одноразовый полиэтиленовый пакет с<br />дезинфекцией Авансепт 2%
              </p>
            </div>
            <div className="h-12 w-0.5 bg-[#2C5F7C] mx-auto"></div>
          </div>

          {/* Третий контейнер */}
          <div className="mb-8">
            <div className="border-2 border-[#2C5F7C] bg-[#E8F4F8] p-4 rounded-md mx-auto max-w-[80%]">
              <p className="text-sm text-center font-medium text-gray-800">
                складируется по мере заполнения в<br />многоразовых контейнерах в<br />установленных спец.помещениях
              </p>
            </div>
          </div>

          {/* Разветвление */}
          <div className="flex justify-center mb-8">
            <div className="w-0.5 h-12 bg-[#2C5F7C]"></div>
          </div>

          <div className="flex justify-center mb-8 relative">
            <div className="absolute top-0 left-[25%] right-[25%] h-0.5 bg-[#2C5F7C]"></div>
            <div className="absolute top-0 left-[25%] w-0.5 h-12 bg-[#2C5F7C]"></div>
            <div className="absolute top-0 right-[25%] w-0.5 h-12 bg-[#2C5F7C]"></div>
          </div>

          {/* Финальные блоки */}
          <div className="flex justify-between items-start">
            <div className="w-[45%]">
              <div className="border-2 border-[#2C5F7C] bg-[#F0F7FA] p-4 rounded-md">
                <p className="text-sm text-center font-medium text-gray-800">
                  Мойка и дезинфекция<br />многоразового контейнера<br />после каждой сдачи отходов<br />Авансепт 2%
                </p>
              </div>
            </div>

            <div className="w-[45%]">
              <div className="border-2 border-[#2C5F7C] bg-[#F0F7FA] p-4 rounded-md">
                <p className="text-sm text-center font-medium text-gray-800">
                  Транспортировка в 442 МОСН г.Луганск
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Кнопка печати */}
        <div className="mt-8 text-center print:hidden">
          <button
            onClick={() => window.print()}
            className="bg-[#2C5F7C] text-white px-6 py-3 rounded-md font-medium hover:bg-[#235169] transition-colors"
          >
            Печать схемы (А4)
          </button>
        </div>
      </div>

      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 15mm;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
