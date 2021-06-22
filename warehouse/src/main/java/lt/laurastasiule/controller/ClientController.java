package lt.laurastasiule.controller;

import io.swagger.annotations.Api;
import javassist.NotFoundException;
import lt.laurastasiule.service.ClientService;
import lt.laurastasiule.dto.ClientDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Api(value = "client")
@RequestMapping(value = "/api/clients")
public class ClientController {

    private final ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping
    public List<ClientDto> getClients() {
        return clientService.getClients();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createClient(@RequestBody ClientDto clientDto) {
        clientService.createClient(clientDto);
    }

    @GetMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ClientDto getClient(@PathVariable final long id) throws NotFoundException {
        return clientService.getClient(id);
    }

    @PutMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateClient(@PathVariable final long id, @RequestBody ClientDto clientDto) {
        try {
            clientService.updateClient(id, clientDto);
        } catch (NotFoundException e) {
            e.printStackTrace();
        }
    }

    @DeleteMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteClient(@PathVariable final long id) {
        clientService.deleteClient(id);
    }

    @GetMapping(path="/types")
    public List<String> getClientTypes() {
        return clientService.getClientTypes();
    }
}

