
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const BloodCompatibility = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Совместимость групп крови при переливании</h1>
        
        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Основные принципы совместимости крови</CardTitle>
              <CardDescription>
                Совместимость групп крови при переливании критически важна для предотвращения 
                опасных иммунных реакций
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                При переливании крови критически важно соблюдать правила совместимости групп крови. 
                Несовместимость может привести к серьезным иммунным реакциям, агглютинации 
                (склеиванию) эритроцитов и даже летальному исходу.
              </p>
              <p className="mb-4">
                Совместимость определяется наличием антигенов A и B на поверхности эритроцитов 
                и соответствующих антител в плазме крови. Антитела реагируют с "чужими" антигенами, 
                что приводит к гемолитической реакции.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Таблица совместимости групп крови</CardTitle>
              <CardDescription>
                Кто может быть донором и реципиентом для разных групп крови
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">Группа крови</TableHead>
                      <TableHead>Может получать от</TableHead>
                      <TableHead>Может быть донором для</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">0 (I) Rh+</TableCell>
                      <TableCell>0 Rh+, 0 Rh-</TableCell>
                      <TableCell>0 Rh+, A Rh+, B Rh+, AB Rh+</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">0 (I) Rh-</TableCell>
                      <TableCell>0 Rh-</TableCell>
                      <TableCell>Все группы крови (универсальный донор)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">A (II) Rh+</TableCell>
                      <TableCell>0 Rh+, 0 Rh-, A Rh+, A Rh-</TableCell>
                      <TableCell>A Rh+, AB Rh+</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">A (II) Rh-</TableCell>
                      <TableCell>0 Rh-, A Rh-</TableCell>
                      <TableCell>A Rh+, A Rh-, AB Rh+, AB Rh-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">B (III) Rh+</TableCell>
                      <TableCell>0 Rh+, 0 Rh-, B Rh+, B Rh-</TableCell>
                      <TableCell>B Rh+, AB Rh+</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">B (III) Rh-</TableCell>
                      <TableCell>0 Rh-, B Rh-</TableCell>
                      <TableCell>B Rh+, B Rh-, AB Rh+, AB Rh-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">AB (IV) Rh+</TableCell>
                      <TableCell>Все Rh+ и Rh- группы</TableCell>
                      <TableCell>AB Rh+</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">AB (IV) Rh-</TableCell>
                      <TableCell>Все Rh- группы</TableCell>
                      <TableCell>AB Rh+, AB Rh-</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Визуальная схема совместимости групп крови</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-100 rounded-lg p-6 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-slate-300 rounded-md p-4 bg-white">
                    <h3 className="text-lg font-semibold mb-3 text-center">Кто кому может быть донором</h3>
                    <div className="flex justify-center mb-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-white font-bold mx-auto">0</div>
                          <p className="mt-2">Донор для всех</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mx-auto">AB</div>
                          <p className="mt-2">Реципиент для всех</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white font-bold mx-auto">A</div>
                          <p className="mt-2">A и AB</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold mx-auto">B</div>
                          <p className="mt-2">B и AB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-slate-300 rounded-md p-4 bg-white">
                    <h3 className="text-lg font-semibold mb-3 text-center">Разъяснение по резус-фактору</h3>
                    <p className="mb-2">
                      <span className="font-semibold">Rh+ положительный</span>: может получать как Rh+, так и Rh- кровь
                    </p>
                    <p className="mb-2">
                      <span className="font-semibold">Rh- отрицательный</span>: может получать только Rh- кровь
                    </p>
                    <p>
                      Резус-конфликт возникает, когда Rh- реципиент получает Rh+ кровь, что может вызвать образование 
                      антител к резус-фактору.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Важные факты о переливании крови</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold">Универсальный донор:</span> 0 (I) группа с отрицательным резус-фактором
                </li>
                <li>
                  <span className="font-semibold">Универсальный реципиент:</span> AB (IV) группа с положительным резус-фактором
                </li>
                <li>
                  В экстренных ситуациях могут использовать универсального донора, но по возможности всегда предпочтительнее 
                  переливание идентичной группы крови
                </li>
                <li>
                  Перед переливанием обязательно проводят пробы на совместимость, даже если группы теоретически совместимы
                </li>
                <li>
                  Существуют также другие антигенные системы (помимо ABO и Rh), которые могут влиять на совместимость
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default BloodCompatibility;
