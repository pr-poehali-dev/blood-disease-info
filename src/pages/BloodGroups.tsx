
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BloodGroups = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-primary">Группы крови</h1>

          <p className="mb-6 text-muted-foreground">
            Группа крови определяется наличием или отсутствием определенных антигенов на поверхности эритроцитов. Существует четыре основные группы крови: 0(I), A(II), B(III) и AB(IV).
          </p>

          <Tabs defaultValue="0" className="mb-8">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="0">0 (I)</TabsTrigger>
              <TabsTrigger value="a">A (II)</TabsTrigger>
              <TabsTrigger value="b">B (III)</TabsTrigger>
              <TabsTrigger value="ab">AB (IV)</TabsTrigger>
            </TabsList>

            <TabsContent value="0">
              <Card>
                <CardHeader>
                  <CardTitle>Группа крови 0 (I)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-bold mb-2">Особенности</h3>
                    <p>Отсутствуют антигены A и B на поверхности эритроцитов. В сыворотке крови содержатся антитела анти-A и анти-B.</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Распространенность</h3>
                    <p>Примерно 44% населения мира имеют группу крови 0.</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Повышенный риск заболеваний</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Язва желудка и двенадцатиперстной кишки</li>
                      <li>Воспалительные заболевания кишечника</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Пониженный риск заболеваний</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Тромбозы</li>
                      <li>Сердечно-сосудистые заболевания</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="a">
              <Card>
                <CardHeader>
                  <CardTitle>Группа крови A (II)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-bold mb-2">Особенности</h3>
                    <p>На поверхности эритроцитов присутствует антиген A. В сыворотке крови содержатся антитела анти-B.</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Распространенность</h3>
                    <p>Примерно 42% населения мира имеют группу крови A.</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Повышенный риск заболеваний</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Онкологические заболевания желудка</li>
                      <li>Ишемическая болезнь сердца</li>
                      <li>Сахарный диабет 2 типа</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Пониженный риск заболеваний</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Язвенная болезнь желудка</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="b">
              <Card>
                <CardHeader>
                  <CardTitle>Группа крови B (III)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-bold mb-2">Особенности</h3>
                    <p>На поверхности эритроцитов присутствует антиген B. В сыворотке крови содержатся антитела анти-A.</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Распространенность</h3>
                    <p>Примерно 9% населения мира имеют группу крови B.</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Повышенный риск заболеваний</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Аутоиммунные заболевания</li>
                      <li>Инсульт</li>
                      <li>Некоторые инфекционные заболевания</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Пониженный риск заболеваний</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Сердечно-сосудистые заболевания (по сравнению с группой A)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ab">
              <Card>
                <CardHeader>
                  <CardTitle>Группа крови AB (IV)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-bold mb-2">Особенности</h3>
                    <p>На поверхности эритроцитов присутствуют антигены A и B. В сыворотке крови нет антител к антигенам A и B.</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Распространенность</h3>
                    <p>Примерно 5% населения мира имеют группу крови AB. Это самая редкая группа крови.</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Повышенный риск заболеваний</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Тромбозы</li>
                      <li>Сердечно-сосудистые заболевания</li>
                      <li>Онкологические заболевания поджелудочной железы</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Пониженный риск заболеваний</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Некоторые инфекционные заболевания</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="bg-muted p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-3">Резус-фактор</h2>
            <p className="mb-3">
              Помимо групп крови системы AB0, важное значение имеет резус-фактор — наличие или отсутствие антигена D на поверхности эритроцитов.
            </p>
            <p>
              Примерно 85% людей имеют положительный резус-фактор (Rh+), а 15% — отрицательный (Rh-). Резус-фактор особенно важен при беременности и переливании крови.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BloodGroups;
